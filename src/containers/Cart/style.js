import styled from 'styled-components'

import ImgLogoCart from '../../assets/imgLogoCart.png'

export const Container = styled.div`
  background-image: url('${ImgLogoCart}');
  background: #2f2f2f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 993px) {
    width: 100%;
  }
`

export const HomeImage = styled.img`
  box-shadow: 0px 12px 35px black;
`
export const Wrapper = styled.div`
  display: flex;
width: 100%;
  justify-content: space-evenly;

  @media screen and (max-width: 993px) {
    display: flex;
    width: 100vw;
    /* flex-direction: column-reverse; */
    flex-direction: column;
    padding: 20px;
    margin-bottom: 50px;
  }
`
