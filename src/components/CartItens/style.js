import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  margin-top: 35px;
  margin-left: 2.4%;
  background: #181416;
  box-shadow: 8px 1px 10px -4px black;
`
export const Header = styled.div`
  background: #181416;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: solid 1px #d6d6aa;
  text-align: center;
  p {
    font-size: 1.3rem;
    color: #d6d6aa;
  }
`

export const Img = styled.img`
  display: flex;

  width: 100px;
  height: 120px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-left: 20%;
  justify-items: center;
  border-radius: 12px;
`
export const ProductDecription = styled.p`
  background: #181416;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #d6d6aa;
  border-bottom: solid 1px gray;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  margin-bottom: 2px;
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
