import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 80px;
  width: 100vw;
  height: 100vh;
`
export const Background = styled.span`
  display: flex;
  background-color: #836543;

  width: 60%;
  justify-content: center;

  img {
    width: 60%;
  }
`
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #444444;

  width: 40%;
  justify-content: center;
  text-align: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;

    padding: 10px;
    color: white;
  }
`
export const Logo = styled.img`
  width: 100px;
`
export const Label = styled.p`
  text-align: start;
  margin: 10px 0 5px 9px;
  font-weight: 700;
`
export const Input = styled.input`
  background-color: #3f3f3f;

  width: 400px;
  height: 45px;
  align-items: center;
  padding: 10px;

  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  color: black;

  box-shadow: 0px 12px 35px black;

  &:focus {
    background-color: #d6d6ba;
  }
`
export const Button = styled.button`
  background-color: #fa9600;
  height: 45px;

  margin-top: 25px;
  font-size: 1.5rem;
  font-weight: 700;

  outline: none;
  border: none;
  border-radius: 10px;
  color: white;

  cursor: pointer;
  box-shadow: 0px 12px 35px black;

  &:hover {
    background-color: #ffb000;
  }

  &:active {
    opacity: 0.6;
  }
`
export const SingLink = styled.p`
  margin-top: 20px;
  font-weight: 700;
  color: white;

  a {
    cursor: pointer;
    color: white;
    margin-left: 20px;

    &:hover {
      color: #000;
    }
  }
`
