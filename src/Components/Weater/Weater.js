import './Weater.scss'

const Weater = (props) => {
	const { temp, city, country, sunrise, sunset, errorForm, pressure } = props;
	const tempC = temp > 0 ? 'temp_warm' : 'temp_cool';

	return (
		<div className="border text-dark backdrop text-center rounded-3" >
			{city &&
				<div>
					<h4 className="mb-0 city">
						{city} {country}
					</h4>
					<p className={`display-2 my-0 ${tempC}`}>{temp} °C</p>
					<p className="mb-1">Восход солнца: <strong>{sunrise}</strong></p>
					<p className="mb-1">Заход солнца: <strong>{sunset}</strong></p>
					<h5>Давление: {pressure} мм рт. ст.</h5>
				</div>
			}
			<p className="mt-2">{errorForm}</p>
		</div >
	);
}
export default Weater;