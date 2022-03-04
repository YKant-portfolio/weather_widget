import './Weater.scss'

const Weater = (props) => {
	const { temp, city, country, sunrise, sunset, errorForm, pressure, icon } = props;
	const tempC = temp > 0 ? 'temp_warm' : 'temp_cool';

	return (
		<div className="border text-dark backdrop text-center rounded-3" >
			{city &&
				<div>
					<h4 className="mt-2 city">
						{city} {country}
					</h4>
					<p className={`display-2 my-0 ${tempC}`}>{temp} °C</p>
					<p className="mb-1">Восход солнца: <strong>{sunrise}</strong></p>
					<p className="mb-1">Заход солнца: <strong>{sunset}</strong></p>
					<h5>Давление: {pressure} мм рт. ст.</h5>
					<img className="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon wheater" />
				</div>
			}
			<p className="mt-2">{errorForm}</p>
		</div >
	);
}
export default Weater;