import styled from 'styled-components'

export const Container = styled.div`
  background-color: #181416;

  display: flex;
  flex-direction: column;
  width: 100%;
`
export const HomeImage = styled.img`
  width: 90%;
  height: 380px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 3%;
`
export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  background-color: #181617;
  gap: 50px;
  width: 100%;
  margin-top: 25px;
  text-align: center;
  align-items: center;
`
export const Menu = styled.button`
  cursor: pointer;
  color: ${(props) => (props.isActiveCategory ? '#FA9600' : '#d6d6ba')};
  border: none;
  border-bottom: ${(props) => props.isActiveCategory && '5px solid #FA9600'};
  padding-bottom: 15px;
  margin-bottom: 10px;
  background-color: #181617;
  text-align: center;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  line-height: 20px;
`
export const Logo = styled.img`
  width: 220px;
`
export const ContainerProducts = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px;
  gap: 30px;
  margin-left: 2.7%;
  justify-items: center;
  margin-top: 25px;
`
