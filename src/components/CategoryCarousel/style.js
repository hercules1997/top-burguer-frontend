import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

export const ContainerItens = styled.div`
  width: 80%;
  margin-top: 10px;
`

export const ImgCategory = styled.img`
  width: 280px;
  height: 250px;
  border-radius: 8px;
  box-shadow: 0px 12px 35px black;

  cursor: pointer;
`

export const Button = styled.button`
  background-color: #3f3f3f;
  width: 280px;
  margin: 0;
  margin-top: 10px;
  font-weight: 700;
  text-align: center;
  box-shadow: 0px 12px 35px black;
  font-size: 1.2rem;
  color: #d6d6ba;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #000;
    background-color: #d6d6ba;
  }
`
