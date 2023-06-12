import styled from 'styled-components'

export const Loading = styled.div`
  background: rgb(47, 47, 47);
  display: flex;
  color: yellow;
  height: 100vh;
  text-align: center;
  justify-content: center;
  font-size: 3rem;
  width: 100%;
  align-items: center;
  z-index: 10000;

  span {
    align-items: center;
    justify-content: center;
  }
`
export const Container = styled.div`
  background: rgb(47, 47, 47);
  box-shadow: 0px 12px 35px black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #181617;

  justify-content: center;
  text-align: center;
  align-items: center;

  h1 {
    display: flex;
    font-size: 3rem;
    flex-direction: column;
    text-align: center;
    margin-top: 10px;
    color: #d6d6ba;
  }
`
export const Logo = styled.img`
  width: 220px;
`

export const SingLink = styled.p`
  margin-top: 20px;
  font-weight: 700;
  color: white;

  a {
    cursor: pointer;
    color: white;
    margin-left: 20px;
    text-decoration: none;

    &:hover {
      color: #000;
    }
  }
`
