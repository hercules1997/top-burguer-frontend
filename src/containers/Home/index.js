import React from 'react'

import ImgHomeBurguer from '../../assets/ImgHomeBurguer.png'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, ContainerItens } from './style'

export function Home () {
  // const [isLoading, setIsLoading] = useState(true)

  // Simulando um atraso de 2 segundos para a demonstração
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 1500)
  // }, [])

  return (
    <Container>
      <img src={ImgHomeBurguer} />

      <ContainerItens>
        <OffersCarousel />
        <CategoryCarousel />
      </ContainerItens>
    </Container>
  )
}

// <>
//   {isLoading
//     ? (
//     <Loading>
//       <span>...</span>
//     </Loading>
//       )
//     : (
//     <Container>
//       <img src={ImgHomeBurguer} />

//       <ContainerItens>
//         <OffersCarousel />
//         <CategoryCarousel />
//       </ContainerItens>
//     </Container>
//       )}
// </>
