import styled from 'styled-components'

export const Container = styled.div`
  background-color: #181416;
  width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .cVXxbE {
    background: white !important;
    box-shadow: 0px 0px 8px white;
  }
  .ezKHIn {
    background: transparent;
    box-shadow: 0px 0px 3px white;
  }

  .rec.rec-arrow {
    background-color: transparent;
    margin-left: 30px;
    margin-right: 30px;
    height: 100%;
    border-radius: 0;
  }

  .rec.rec-arrow:hover {
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
  padding: 20px;
  box-shadow: 0px 5px 15px black;
  margin-top: 10px;
`

export const ImgCategory = styled.img`
  width: 280px;
  height: 250px;
  border-radius: 8px;
  box-shadow: 0px 8px 12px black;

  cursor: pointer;
`

export const Button = styled.button`
  background-color: #3f3f3f;
  width: 280px;
  height: 50px;
  margin-top: 10px;
  font-weight: bold;
  border: none;
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 8px 10px black;
  font-size: 1.2rem;
  border-radius: 8px;
  color: #d6d6ba;

  cursor: pointer;

  &:hover {
    color: #000;
    background-color: #d6d6ba;
    transition: 0.8s;
  }

  &:active {
    opacity: 0.7;
  }
`
