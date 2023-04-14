import styled from 'styled-components'

import { Button } from '../../../components/Button'

export const Container = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #2a2a2aba;
    padding: 30px;
    border-radius: 18px;

    width: 350px;
  }
`
export const Label = styled.p`
  font-size: 1rem;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 17px;
  padding: 12px;
  border-radius: 10px;
  border: none;
  margin-bottom: 25px;
`
export const ButtonStyle = styled(Button)`
  font-size: 16px;
  padding: 10px;
  width: 100%;
`
export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: dashed 4px black;
  border-radius: 12px;
  padding: 10px;
  gap: 3px;
  text-align: center;
  justify-content: center;
  margin-bottom: 25px;
  input {
    opacity: 0;
    width: 1px;
  }
`
