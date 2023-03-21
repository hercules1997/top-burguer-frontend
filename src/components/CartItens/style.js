import styled from 'styled-components'

export const Container = styled.div`
  background: #181416;

  border-radius: 10px;
  /* box-shadow: 0px 5px 15px black; */
  /* padding: 10px;
  width: 80%;
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

    border: solid 2px blue;
  }
`
// export const ImgProduct = styled.p`
//   width: px;
//   border: solid 2px blue;
// `
export const Img = styled.img`
  width: 200px;
  height: 200px;
  border: solid 2px red;
  padding: 5px;
  border-radius: 12px;
`
export const ProductDecription = styled.p`
  background: #d6d6aa;
  width: 200px;
  display: flex;
  justify-content: space-around;

  border: solid 2px green;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  background: yellow;
`
