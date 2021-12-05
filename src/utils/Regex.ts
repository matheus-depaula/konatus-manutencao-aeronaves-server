class Regex {
  public validateLogin(login: string): boolean {
    return RegExp(/^[a-zA-Z]{4,10}$/).test(login);
  }
}

const regex = new Regex();

export { regex };
