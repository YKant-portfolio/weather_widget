import './Weater.css'

const Weater = (props) => {
	const { temp, city, country, sunrise, sunset, errorForm, pressure } = props;
	return (
		<div className=" border bg-white text-dark bg-opacity-50 text-center rounded-3">
			{city &&
				<>
					<h4 className="mb-0 city">
						{city} {country}
					</h4>
					<p className="display-2 my-0">{temp} °C</p>
					<p className="mb-1">Восход солнца: <strong>{sunrise}</strong></p>
					<p className="mb-1">Заход солнца: <strong>{sunset}</strong></p>
					<h5>Давление: {pressure} мм рт. ст.</h5>
				</>
			}
			<p className="mt-2">{errorForm}</p>
		</div >
	);
}
export default Weater;