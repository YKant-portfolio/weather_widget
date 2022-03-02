const Form = props => {
	return (
		<form onSubmit={props.weatherMetod}>
			<input type="text" name="city" placeholder="Город (вводите латиницей)" />
			<button>получить погоду</button>
		</form>
	);
}
export default Form;