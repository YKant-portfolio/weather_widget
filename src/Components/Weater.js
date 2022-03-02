const Weater = (props) => {
	const { temp, city, country, sunrise, sunset, errorForm, pressure } = props;
	return (
		<div>
			{city &&
				<>
					<p>Местоположение: 	{city} {country}</p>
					<p>Температура:  {temp} ℃ </p>
					<p>Восход солнца:  {sunrise}</p>
					<p>Заход солнца:  {sunset}</p>
					<p>Давление: {pressure} мм рт. ст.</p>
				</>
			}
			<p>{errorForm}</p>
		</div>
	);
}
export default Weater;