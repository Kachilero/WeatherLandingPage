/**
 * Class User
 * @var id number - unique id
 * @var email string - user email
 * @var zip number - the users zip code
 * @var accepted boolean - has accepted the term of service
 * */

export class User {
  constructor(
    public id: number,
    public email: string,
    public zip: number,
    public accepted: boolean
  ) {}
}
