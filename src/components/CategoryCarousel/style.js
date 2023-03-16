import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3d2807;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .rec.rec-arrow {
    background-color: #3f3f3f;
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  h1 {
    font-size: 3rem;
    color: #d6d6ba;
  }
`

export const ContainerItens = styled.div`
  width: 100%;
  margin: 20px;
  margin-top: 10px;
`

export const ImgCategory = styled.img`
  width: 280px;
  height: 250px;
  border-radius: 8px;
  box-shadow: 0px 5px 15px black;

  cursor: pointer;
`

export const Button = styled.button`
  background-color: #3f3f3f;
  width: 280px;
  margin-top: 10px;
  font-weight: bold;
  border: none;
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 12px 35px black;
  font-size: 1.2rem;
  color: #d6d6ba;

  cursor: pointer;

  &:hover {
    color: #000;
    background-color: #d6d6ba;
  }

   &:active {
    opacity: 0.7;
   }
`
