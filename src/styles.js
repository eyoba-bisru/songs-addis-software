import styled from "@emotion/styled";

export const Outer = styled.div`
//   border: 1px solid gray;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Heading = styled.h1`
    text-align: center;
`

export const Form = styled.form`
    background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const Input = styled.input`
    width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const Button = styled.button`
    background-color: #4caf50;
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const Modal = styled.div`
	z-index: auto;
	display: ${({show}) => (show ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width:100vw;
	background: rgba(0,0,0,0.5);
`;

export const Container = styled.div`
    position:fixed;
    background: antiquewhite;
    width: 33%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    padding: 2rem;
    color: rgba(0,0,139, 0.7);
`;

export const CloseImage = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`


