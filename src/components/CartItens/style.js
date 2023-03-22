import styled from 'styled-components'

export const Container = styled.div`
  /* background: #181416; */
  width: 70%;
  margin-left: 2.4%;
  background: #d6d6ba;
  border-radius: 15px;
  /* box-shadow: 0px 5px 15px black; */
  /* padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; */
`
export const Header = styled.div`
  background: #d6d6ba;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  text-align: center;
  p {
    font-size: 1.3rem;
  }
`
// export const ImgProduct = styled.p`
//   width: px;
//   border: solid 2px blue;
// `
export const Img = styled.img`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 120px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 5px;

  border-radius: 12px;
`
export const ProductDecription = styled.p`
  background: #d6d6aa;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px gray;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* justify-content: center; */
  margin-bottom: 2px;
  border-radius: 14px;
  font-size: 1rem;
  /* align-items: center; */

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
