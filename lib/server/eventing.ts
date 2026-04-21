/**
 * Tiny in-process “event bus” for local experimentation.
 * Handlers run on the same Node process as API routes (fine for dev;
 * on Vercel each invocation may be a cold isolate—use a real queue/DB for prod).
 */

export type ServerEvent = {
  name: string;
  payload: unknown;
  at: string;
};

type Handler = (event: ServerEvent) => void;

const handlers = new Set<Handler>();

export function onServerEvent(handler: Handler): () => void {
  handlers.add(handler);
  return () => handlers.delete(handler);
}

export function emitServerEvent(name: string, payload: unknown): ServerEvent {
  const event: ServerEvent = {
    name,
    payload,
    at: new Date().toISOString(),
  };

  if (process.env.NODE_ENV === 'development') {
    console.info('[server-event]', event.name, event.payload);
  }

  handlers.forEach((fn) => {
    try {
      fn(event);
    } catch (err) {
      console.error('[server-event] handler error', err);
    }
  });

  return event;
}
