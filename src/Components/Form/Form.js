import './Form.css';

const Form = props => {
	return (
		<form onSubmit={props.weatherMetod}>
			<input className="input-Form" type="text" name="city" placeholder="Город (латиницей)" />
			<button>получить погоду</button>
		</form>
	);
}
export default Form;