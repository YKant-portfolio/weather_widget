import { Component } from 'react';
import Info from './Components/Info/Info';
import Form from './Components/Form/Form';
import Weater from './Components/Weater/Weater';

import './App.scss';

const API_KEY = "9254f20a0825f635ec64989b28f7bbdb";

class App extends Component {

	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		pressure: undefined,
		sunrise: undefined,
		sunset: undefined,
		icon: undefined,
		error: undefined,
	}

	gettingWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;

		if (city) {
			const api_url = await
				fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`).then(data => data.json());

			console.log(api_url);

			const temp = Math.round((api_url.main.temp) - 273.15);
			const sunrise = api_url.sys.sunrise;
			const sunset = api_url.sys.sunset;
			const date_sunrise = new Date();
			const date_sunset = new Date();
			date_sunrise.setTime(sunrise * 1000);
			date_sunset.setTime(sunset * 1000);
			const sunrise_date = `${date_sunrise.getHours()} : ${date_sunrise.getMinutes()} : ${date_sunrise.getSeconds()}`;
			const sunset_date = `${date_sunset.getHours()} : ${date_sunset.getMinutes()} : ${date_sunset.getSeconds()}`;
			const pressure = Math.round((api_url.main.pressure) * 0.750064);


			this.setState({
				temp,
				city: api_url.name,
				country: api_url.sys.country,
				pressure,
				sunrise: sunrise_date,
				sunset: sunset_date,
				icon: api_url.weather[0]['icon'],
				errorForm: undefined,
			});
		} else {
			this.setState({
				temp: undefined,
				city: undefined,
				country: undefined,
				pressure: undefined,
				sunrise: undefined,
				sunset: undefined,
				icon: undefined,
				errorForm: "Введите название города",
			});
		}
	}

	render() {
		return (
			<div className="vh-100 wrapper" >
				<div className="container py-5 height">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-sm-12 col-md-10 col-lg-8 col-xl-6 ">
							<div className="card bg-dark text-white ">
								<div className="bg-image">
									<img
										src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
										className="card-img"
										alt="weather"
									/>
								</div>
								<div className="card-img-overlay text-dark p-4">
									<Info />
									<Form weatherMetod={this.gettingWeather} />
									<Weater
										temp={this.state.temp}
										city={this.state.city}
										country={this.state.country}
										sunrise={this.state.sunrise}
										sunset={this.state.sunset}
										pressure={this.state.pressure}
										icon={this.state.icon}
										errorForm={this.state.errorForm}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
