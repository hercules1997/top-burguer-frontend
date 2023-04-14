import { ShoppingBag } from '@mui/icons-material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ListAltIcon from '@mui/icons-material/ListAlt'

import paths from '../../constants/paths'
const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBag
  },
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.Products,
    icon: ListAltIcon
  },
  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProducts,
    icon: AddCircleIcon
  }
]

export default listLinks
