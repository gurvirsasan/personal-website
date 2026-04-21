import type { NextApiRequest, NextApiResponse } from 'next';
import { json, methodNotAllowed } from '../../lib/server/http';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return methodNotAllowed(res, ['GET']);
  }

  return json(res, 200, {
    ok: true,
    service: 'my-website-api',
    env: process.env.NODE_ENV,
  });
}
