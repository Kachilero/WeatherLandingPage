/**
 * Class User
 * @var id number - unique id
 * @var email string - user email
 * @var zip number - the users zip code
 * @var accepted boolean - has accepted the term of service
 * @var loggedIn boolean - logged in or not
 * */

export class User {
  constructor(
    public zip: string,
    public accepted: boolean,
    public id?: number,
    public email?: string,
    public loggedIn?: boolean
  ) {}
}
