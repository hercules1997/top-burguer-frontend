import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone'
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone'
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone'
import styled from 'styled-components'

import { Button } from '../../components/Button'

export const ContainerMaster = styled.div`

display: block;
`
export const Container = styled.div`
  margin-top: 45px;
  margin-bottom: 20px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media screen and (max-width: 993px) {
      grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin: 0;
    padding: 20px;
  }
  @media screen and (max-width: 620px) {
      grid-template-columns: repeat(1, 1fr);
    width: 100%;
    margin: 0;
    padding: 20px;
  }
  Button {
    color: white;
    margin-top: 5px;
    width: 100%;

    @media screen and (max-width: 993px) {
      width: auto;
    }
  }
`
export const EmpyCart = styled.div`
  color: #1e1e1c;
  font-size: 3rem;
  display: flex;
  padding: 20px;
  background-color: #3f3f3f;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 5px black;
  border-radius: 15px;
`

export const Bag = styled(ShoppingBagTwoToneIcon)`
  color: #1e1e1c;
  font-size: 8rem !important;
`

export const Img = styled.img`
  background: #3f3f3f;

  width: 100px;
  height: 100px;

  padding: 2px;

  border-radius: 18px;
`
export const ProductDecription = styled.p`
  background: #3f3f3f;
  background: red;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #d6d6aa;
  p {
    border: 0.1px dashed wheat;
    width: 25px;
    border-radius: 50%;

    padding: 2px;
  }

  @media screen and (max-width: 993px) {
    display: flex;
    justify-content: center;
    padding-right: 20px;
    padding-top: 2px;
  }
`

export const Content = styled.div`
  @media screen and (max-width: 993px) {
    padding: 10px;
  }
  display: flex;
  padding: 10px;

  /* display: grid; */
  background: #3f3f3f;
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
    margin-top: 10px;
  }

  .img {
    @media screen and (max-width: 993px) {
      width: 30%;
    }
  }
  .decription {
    @media screen and (max-width: 412) {
      width: 70%;
      display: flex;
      /* flex-direction: column; */
      height: 100%;
    }
    @media screen and (max-width: 524) {
      width: 70%;
      flex-direction: row;
      height: 100%;
    }
  }

  .decriptAling {
    display: flex;
    align-items: end;
    justify-content: end;
    text-align: end;
  }
  .quanty {
    align-items: end;
    justify-content: end;
    text-align: end;
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
export const ButtonStyle = styled(Button)`
  margin-top: 1px;
  margin-bottom: 5px;
  padding: 10px;
  position: sticky;
  top: 50px;
  box-shadow: 0px 0px 2px black;
  width: 100%;
  @media screen and (max-width: 993px) {
    display: none !important;
  }
`
export const ButtonStyleTwo = styled(Button)`
  margin-top: 1px;
  margin-bottom: 5px;
  padding: 10px;
  box-shadow: 0px 0px 2px black;
  display: none;
  @media screen and (max-width: 993px) {
    display: flex;
    font-size: 15px;
    width: 100%;
  }
`
export const ButtonStyleThree = styled(Button)`
  margin-top: 1px;
  margin-bottom: 5px;
  padding: 10px;

  box-shadow: 0px 0px 2px black;

  @media screen and (max-width: 993px) {
    font-size: 15px;
    display: flex;
  }
`
export const ContainerButtom = styled.div`
  @media screen and (max-width: 993px) {
    display: flex;
    justify-content: space-around;
  }
`
export const ContainerContent = styled.div`
  position: relative;
  @media screen and (max-width: 993px) {
  }
`
export const Remove = styled(RemoveCircleTwoToneIcon)`
  border-radius: 50%;
  cursor: pointer;
  @media screen and (max-width: 993px) {
  }
`
export const Add = styled(AddCircleOutlineTwoToneIcon)`
  border-radius: 50%;
  cursor: pointer;
  @media screen and (max-width: 993px) {
  }
`
export const TrashAt = styled(HighlightOffTwoToneIcon)`
  color: red !important;
`
export const Trash = styled.button`
  background: transparent;
  position: absolute;
  justify-content: end;
  cursor: pointer;
  align-items: end;
  right: -10px;
  top: -14px;
  @media screen and (max-width: 993px) {
    right: -10px;
    top: -14px;
  }

  width: 14px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border: none;
  text-align: end;
  align-items: end;
`
