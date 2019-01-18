/**
 * Class Weather
 * @var city string - the current users city
 * @var state string - the current users state
 * @var currTemp number - the current temp in the current city
 * @var hiTemp number - the projected hi for current city
 * @var lowTemp number - the projected low for the current city
 * @var currIcon string - URL to the icon representing the current weather conditions
 * @var description string - a short description of the current weather conditions
 * @var zip number - the zip code of the current users city
 * @var alerts bool - True if there are any alerts (watches, warning, etc.)
 * @var warnings array string - the warning @TODO change this to an object
 * */

export class Weather {
  constructor(
    public city: string,
    public state: string,
    public currTemp: number,
    public hiTemp: number,
    public lowTemp: number,
    public currIcon: string,
    public description: string,
    public zip: number,
    public alerts: boolean,
    public warnings: string
  ) {}
}
