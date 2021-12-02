import jwt from 'jsonwebtoken';

class Auth {
  private readonly secret: string = process.env.TOKEN_SECRET;

  public generate(login: string): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(login, this.secret, (err, bearer) => {
        if (err) reject(new Error(err.message));

        resolve(`Bearer ${bearer}`);
      });
    });
  }

  public validate(bearer: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const token = bearer.replace('Bearer ', '');

      jwt.verify(token, this.secret, (err, login) => {
        if (err) reject(new Error(err.message));

        resolve(login as any);
      });
    });
  }
}

const auth = new Auth();

export { auth };
