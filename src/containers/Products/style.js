import styled from 'styled-components'

export const Container = styled.div`
  background-color: #2f2f2f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const HomeImage = styled.img`
  height: 280px;
  margin-top: 3%;
`
export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2f2f2f;
  gap: 50px;
  width: 100%;
  margin-top: 25px;
  padding-top: 15px;
  text-align: center;
  align-items: center;
  box-shadow: 0px 1px 2px black;
`
export const Menu = styled.button`
  cursor: pointer;
  color: ${(props) => (props.isActiveCategory ? '#FA9600' : '#d6d6ba')};
  border: none;
  border-bottom: ${(props) => props.isActiveCategory && '3px solid #FA9600'};
  padding-bottom: 8px;
  margin-bottom: 10px;
  background-color: transparent;
  text-align: center;
  align-items: center;
  transition: 0.5s;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 20px;

  &:hover {
    transition: 0.6s;
    border-bottom: solid 3px white;
    color: white;
  }
`
export const Logo = styled.img`
  width: 220px;
`
export const ContainerProducts = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 30px;
  justify-items: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 25px;
  box-shadow: 0 0 1px black;
`
