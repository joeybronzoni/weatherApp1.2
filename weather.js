
class Weather {
  constructor(city,  state) {
	this.API_KEY = secret.env;
	this.ROOT_URL = 'http://api.wunderground.com/api/'
	this.city = city;
	this.state = state;


  }

  async getWeather(city) {
	const response = await fetch(`${this.ROOT_URL}${this.API_KEY}/conditions/q/${this.state}/${this.city}.json`);

	const responseData = await response.json();

	return responseData.current_observation;

  };

  // Change weather Location
  changeLocation(city, state) {
	this.city = city;
	this.state = state;
  }
}
