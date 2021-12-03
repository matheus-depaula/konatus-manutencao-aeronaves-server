import { Request, Response, NextFunction } from 'express';

import { auth } from '../auth';

export async function isTokenValid(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { authorization } = req.headers;

  try {
    if (!authorization) throw new Error('Usuário não autenticado');

    const { id } = await auth.validateToken(authorization);

    req.userId = id;

    next();
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
}
