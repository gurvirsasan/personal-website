import type { NextApiResponse } from 'next';

export function json<T>(res: NextApiResponse, status: number, body: T) {
  return res.status(status).json(body);
}

export function methodNotAllowed(res: NextApiResponse, allowed: string[]) {
  res.setHeader('Allow', allowed.join(', '));
  return json(res, 405, { error: 'Method not allowed' });
}
