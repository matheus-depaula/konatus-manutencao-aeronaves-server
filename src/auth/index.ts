import { sign, verify } from 'jsonwebtoken';

import { User } from '../entities/User';

interface Payload {
  id: string;
  login: string;
}

class Auth {
  private readonly secret: string = process.env.TOKEN_SECRET;

  public generateToken(user: User): Promise<string> {
    const payload: Payload = { id: user.id, login: user.login };

    return new Promise((resolve, reject) =>
      sign(payload, this.secret, (err: Error, bearer: string) => {
        if (err) reject(new Error(err.message));

        resolve(`Bearer ${bearer}`);
      })
    );
  }

  public validateToken(bearer: string): Promise<User> {
    const token = bearer.replace('Bearer ', '');

    return new Promise((resolve, reject) =>
      verify(token, this.secret, (err: Error, user: Payload) => {
        if (err) reject(new Error(err.message));

        resolve(user as any);
      })
    );
  }
}

const auth = new Auth();

export { auth };
