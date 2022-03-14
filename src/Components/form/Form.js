import './Form.scss';

const Form = props => {

	const submitWeather = (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		props.getCity(city);
	}

	return (
		<form onSubmit={submitWeather}>
			<input className="input-Form" type="text" name="city" placeholder="Город " />
			<button>получить погоду</button>
		</form>
	);
}
export default Form;