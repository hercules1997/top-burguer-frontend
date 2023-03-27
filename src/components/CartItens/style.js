import styled from 'styled-components'

import trashOpen from '../../assets/trash-open.png'
export const Container = styled.div`
  margin-top: 35px;
  margin-left: 2.4%;
  margin-bottom: 20px;
  Button {
    color: white;
    margin-top: 5px;
    width: 100%;
  }
`
export const EmpyCart = styled.div`
  color: #1e1e1c;
  font-size: 3rem;
  display: flex;
  background-color: #3f3f3f;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 5px black;
  border-radius: 15px;

  img {
    width: 120px;
  }
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-columns: 100px 260px 150px 100px 110px 40px;

  border-bottom: solid 1px gray;

  margin-bottom: 10px;
  text-align: center;
  p {
    font-size: 1.3rem;
    color: #d6d6aa;
  }
`

export const Img = styled.img`
  display: flex;
  background: #3f3f3f;

  width: 100px;
  height: 100px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10px;
  /* margin-left: 10px; */
  justify-items: start;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`
export const ProductDecription = styled.p`
  background: #3f3f3f;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #d6d6aa;
`
export const Trash = styled.button`
  width: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  align-items: center;
  border-bottom: solid 1px gray;
  img {
    &:hover {
      background-image: url('${trashOpen}');
    }
  }
`

export const Content = styled.div`
  display: grid;
  background: #3f3f3f;
  grid-template-columns: repeat(6, 1fr);
  grid-template-columns: 100px 280px 120px 130px 80px 60px;
  box-shadow: 0px 0px 8px black;
  margin-bottom: 5px;
  border-radius: 14px;
  font-size: 1rem;

  .quantity-container {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  button {
    padding: 2px;
    border: none;
    cursor: pointer;
    color: #d6d6aa;
    font-size: 18px;
    background: transparent;
  }
  button:hover {
    font-weight: bold;
  }
  button:active {
    opacity: 0.7;
  }
`
