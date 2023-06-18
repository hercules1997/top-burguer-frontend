import styled from 'styled-components'

export const Container = styled.div`
  background: black;
  display: flex;
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  width: 100%;
  height: 45px;
  z-index: 10;
  flex-direction: row;
  padding: 5px;
  /* align-items: center; */
  justify-content: space-between;

  @media screen and (max-width: 993px) {
    display: none;
    width: 100%;
  }
`
export const ContainerItems = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
 justify-content: end;
margin-right: 8%;
`

export const PageLink = styled.button`
  display: flex;
  background: none;
  color: wheat;
  border: none;
  cursor: pointer;
  align-items: center;

&:hover {
  color: orange;
  border-bottom: 1px solid orange;
}
  @media screen and (max-width: 993px) {
    display: flex;
  }
`
