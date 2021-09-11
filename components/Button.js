import styled from 'styled-components'

const Button = styled('button')`
  display: inline-block;
  font-size: 0.8rem;
  margin: 2rem 0;
  text-align: center;
  padding: 0.8rem 1.4rem;
  border: 2px solid ${props => props.primary ? "white" : "#a29bfe"};
	background-color: ${props => props.primary ? "white" : "#a29bfe"};
	color: ${props => props.primary ? "white" : "white"};
  font-weight: 400;
  box-shadow: 0 2px 4px rgb(35 54 66 / 20%);
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 10px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

export default Button