import { StyledButton } from './styles';

const Button = () => {
	return (
		<StyledButton
			color='red'
			padding='2rem'
			onClick={() => console.log('CLICK')}
		>
			CLICK ME
		</StyledButton>
	);
};

export default Button;
