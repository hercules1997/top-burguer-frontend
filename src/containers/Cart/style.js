import styled from 'styled-components'

import ImgLogoCart from '../../assets/imgLogoCart.png'

export const Container = styled.div`
  background-image: url('${ImgLogoCart}');
  background: #2f2f2f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const HomeImage = styled.img`
  box-shadow: 0px 12px 35px black;
`
export const Wrapper = styled.div`
  display: flex;

  justify-content: space-evenly;
`
