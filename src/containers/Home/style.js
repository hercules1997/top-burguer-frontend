import styled from 'styled-components'

export const Container = styled.div`
  background-color: #181416;

  display: flex;
  flex-direction: column;
  width: 100%;
`
export const HomeImage = styled.img`
  width: 100%;
  height: 320px;
  /* margin-left: 5%;
  margin-right: 5%; */
  margin-top: 3%;
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
// export const ErrorMessage = styled.p`
//   text-align: start;
//   color: yellow;
//   letter-spacing: 1px;
//   margin: 2px 0 2px 9px;
//   font-weight: 700;
// `

// export const Label = styled.p`
//   text-align: start;
//   margin: 10px 0 10px 9px;
//   font-weight: 700;
// `
// export const Input = styled.input`
//   background-color: #3f3f3f;

//   width: 400px;
//   height: 45px;
//   align-items: center;
//   padding: 10px;

//   outline: none;
//   border: ${(props) => (props.error ? '2px solid yellow' : 'none')};
//   border-radius: 10px;
//   font-size: 1.2rem;
//   color: #d6d6ba;

//   box-shadow: 0px 12px 35px black;

//   &:focus {
//     background-color: #d6d6ba;
//     color: black;
//   }
// `

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
