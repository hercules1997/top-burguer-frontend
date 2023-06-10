import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 60%;
  height: 100vh;
  display: none; //TODO Não esquecer de mudar a opçao de tela para desktop
  background: rgb(47, 47, 47);

  
  @media screen and (max-width: 993px) {
    display: flex;
    width: 100%;
    z-index: 900;
  }
`
