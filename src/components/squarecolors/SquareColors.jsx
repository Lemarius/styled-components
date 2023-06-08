import { useState } from 'react';
import { StyledSquare } from './styles';

const SquareColors = () => {
	const [active, setActive] = useState(true);

	return (
		<>
			<StyledSquare color={active}></StyledSquare>
			<button onClick={() => changeColor(active, setActive)}>Cambiar</button>
		</>
	);
};

const changeColor = (active, setActive) => {
	setActive(!active);
};

export default SquareColors;
