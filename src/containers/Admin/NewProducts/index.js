import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import apiTopBurguer from '../../../services/api'
import { Container, Label, Input, ButtonStyle, LabelUpload } from './style'

function NewProducts () {
  const [fileName, setFileName] = useState(null)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    async function loadOrders () {
      const { data } = await apiTopBurguer.get('products')
    }

    loadOrders()
  }, [])

  return (
    <Container>
      <form noValidate>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />

        <LabelUpload>
          {fileName || (
            <>
              <CloudUploadIcon />
              Carregar imagem
            </>
          )}

          <Input
            type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={(value) => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>
        <ReactSelect></ReactSelect>

        <ButtonStyle>Adiconar produto</ButtonStyle>
      </form>
    </Container>
  )
}
export default NewProducts
