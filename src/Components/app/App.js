import { Component } from 'react';
import Service from '../../service/Service';
import Info from '../info/Info';
import Form from '../form/Form';
import Weather from '../weather/Weather';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './App.scss';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weather: {},
			error: false,
		}
	}

	service = new Service();

	getCity = (city) => {
		this.updateWeather(city);
	}

	onWeterLoaded = (weather) => {
		this.setState({ weather });
	}

	updateWeather = (city) => {
		if (city) {
			this.service
				.getWeather(city)
				.then(this.onWeterLoaded)
				.catch(this.onError)
		}
	}

	onError = () => {
		this.setState({
			error: true,
		})
		setTimeout(() => {
			this.setState({
				error: false,
			})
		}, 3000)
	}

	render() {
		const { weather, error } = this.state;
		const { temp, city, country, sunrise, sunset, pressure, icon } = weather

		const message = error ? <ErrorMessage /> : <Weather
			temp={temp}
			city={city}
			country={country}
			sunrise={sunrise}
			sunset={sunset}
			pressure={pressure}
			icon={icon}
		/>;
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
									<Form getCity={this.getCity} />
									{message}
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
