import type { NextApiRequest, NextApiResponse } from 'next';
import { emitServerEvent } from '../../../lib/server/eventing';
import { json, methodNotAllowed } from '../../../lib/server/http';

type Body = {
  name?: string;
  payload?: unknown;
};

/**
 * POST /api/v2/events
 * Body: { "name": "signup_started", "payload": { ... } }
 * Emits through local server eventing (see lib/server/eventing.ts).
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return methodNotAllowed(res, ['POST']);
  }

  const body = (typeof req.body === 'object' && req.body !== null
    ? req.body
    : {}) as Body;

  if (!body.name || typeof body.name !== 'string') {
    return json(res, 400, { error: 'Missing string field "name"' });
  }

  const event = emitServerEvent(body.name, body.payload ?? null);
  return json(res, 202, { ok: true, id: event.at, name: event.name });
}
