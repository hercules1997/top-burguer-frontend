import styled from 'styled-components'

export const Container = styled.div`
  background-color: #181416;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

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
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec.rec-dot {
    background: transparent;
    border: 1px solid gray;
  }
  .rec.rec-dot:hover {
    background: black;
    border: 1px solid #d6d6ba;
    box-shadow: 0px 0px 12px white;
  }
  .rec.rec-dot_active {
    background: white;
    box-shadow: 0px 0px 12px white;
  }

  h1 {
    font-size: 3rem;
    color: #d6d6ba;
  }
`

export const ContainerItens = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 15px black;
`
export const OfferName = styled.p`
  display: flex;
  width: 281px;
  background-color: black;
  color: #d6d6ba;
  font-size: 1.2rem;
  justify-content: center;
  padding: 7px;
  box-shadow: 0px 5px 15px black;
`
export const OfferPrice = styled.p`
  display: flex;
  width: 281px;
  background-color: black;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: start;
  align-items: start;
  justify-content: start;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px;
  box-shadow: 0px 5px 15px black;
`

export const ImgCategory = styled.img`
  width: 280px;
  height: 250px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0px 5px 15px black;

  cursor: pointer;
`

export const Button = styled.button`
  background-color: #3f3f3f;
  width: 280px;
  height: 60px;
  margin-top: 10px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 7px 8px black;
  font-size: 1.5rem;
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
