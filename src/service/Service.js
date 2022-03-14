class Service {

	_apiKey = "9254f20a0825f635ec64989b28f7bbdb";

	getResource = async (url) => {
		let res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
		return await res.json();
	};

	getWeather = async (city) => {
		const res = await this.getResource(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this._apiKey}`);
		return this._transformWeather(res)
	}

	_transformWeather = (data) => {
		const sun = (sun) => {
			const f1 = sun;
			const date = new Date();
			date.setTime(f1 * 1000);
			const res = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
			return res;
		}

		return {
			temp: Math.round((data.main.temp) - 273.15),
			city: data.name,
			country: data.sys.country,
			pressure: Math.round((data.main.pressure) * 0.750064),
			sunrise: sun(data.sys.sunrise),
			sunset: sun(data.sys.sunset),
			icon: data.weather[0]['icon'],
		}
	}
}

export default Service;