import './Form.scss';

const Form = props => {
	return (
		<form onSubmit={props.weatherMetod}>
			<input className="input-Form" type="text" name="city" placeholder="Город " />
			<button>получить погоду</button>
		</form>
	);
}
export default Form;