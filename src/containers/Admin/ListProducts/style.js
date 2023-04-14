import ModeEditIcon from '@mui/icons-material/ModeEdit'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  text-align: center;
  min-height: 100vh;

  .checkYes {
    color: green;
    border-radius: 28px;
  }
  .checkNo {
    color: red;
    border-radius: 28px;
  }

  .table-row {
    font-weight: bold;
    color: whitesmoke;
    height: 50px;
    
    background-color: black;
  }
  .table-container {
   border-radius: 15px;

    box-shadow: 0 0px 10px 7px #292929;
  }
`
export const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`
export const ModeEditIconStyle = styled(ModeEditIcon)`
  width: 80px;
  color: gray;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: black;
  }
`
