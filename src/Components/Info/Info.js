import "./Info.scss"

const Info = (props) => {

	return (
		<div className="wrap">
			<h2>Погодное приложение</h2>
			<p>узнайте погоду в вашем городе</p>
			{/* <img className="icon" src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="icon wheater" /> */}
		</div>
	);
}
export default Info;