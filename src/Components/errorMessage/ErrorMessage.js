import img from './error.gif'

const ErrorMessage = () => {
	return (
		<>
			<img style={{ display: 'block', width: "200px", height: '200px', objectFit: 'contain', margin: '0 auto' }} src={img} alt="Error" />
			<h4 style={{ textAlign: 'center', color: "red", margin: '0 auto' }}>город не найден</h4>
		</>
	)
}

export default ErrorMessage;