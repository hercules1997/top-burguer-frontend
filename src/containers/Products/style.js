import styled from 'styled-components'

export const Container = styled.div`
  background-color: #181416;
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
  background-color: #181617;
  gap: 50px;
  width: 100%;
  margin-top: 25px;
  padding-top: 15px;
  text-align: center;
  align-items: center;
  box-shadow: 0px 12px 35px black;
`
export const Menu = styled.button`
  cursor: pointer;
  color: ${(props) => (props.isActiveCategory ? '#FA9600' : '#d6d6ba')};
  border: none;
  border-bottom: ${(props) => props.isActiveCategory && '4px solid #FA9600'};
  padding-bottom: 8px;
  margin-bottom: 10px;
  background-color: #181617;
  text-align: center;
  align-items: center;
  transition: 0.5s;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 20px;

  &:hover {
    color: black;
    transition: 0.5s;
    border-bottom: solid 4px black;
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
  /* margin-left: 2.7%; */
  justify-items: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 25px;
  box-shadow: 0px 12px 35px black;
`
