import styled from "styled-components";

const StyledButton = styled.button` 
    background-color: ${props => props.color};
    padding: ${props => props.padding};
`;

export {StyledButton};