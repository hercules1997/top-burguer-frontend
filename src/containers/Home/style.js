import styled from 'styled-components'

export const Container = styled.div`
  background-color: #2f2f2f;

  display: flex;
  flex-direction: column;
  width: 100%;
`
export const HomeImage = styled.img`
  width: 100%;
  height: 320px;

  box-shadow: 0px 12px 35px black;
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
    padding: 10px;
    margin-top: 50px;
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
