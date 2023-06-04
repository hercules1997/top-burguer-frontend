import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp'
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded'
import HomeSharpIcon from '@mui/icons-material/HomeSharp'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import iconCart from '../../assets/iconCart.png'
import person from '../../assets/person.png'
import { useCart } from '../../hooks/CartContext'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  PageLink,
  PageLinkExit,
  ContainerRight,
  ContainerText,
  PageLinkAdmin,
  MenuDevice,
  BottomNavigationActionStyle,
  BottomNavigationStyle
} from './style'

export function Header () {
  const { logout, userData } = useUser()
  const { cartProducts } = useCart()
  const [finalItems, setAllItems] = useState([])
  const [value, setValue] = React.useState('recents')

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.quantity + acc
    }, 0)

    setAllItems(sumAllItems)
  }, [cartProducts])

  const {
    push,
    location: { pathname }
  } = useHistory()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Container>
        <ContainerLeft>
          <PageLinkAdmin
            onClick={() => push('/pedidos')}
            isAdmin={userData.admin}
          >
            Administrador
          </PageLinkAdmin>
          <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
            Home
          </PageLink>
          <PageLink
            onClick={() => push('/produtos')}
            isActive={pathname.includes('/produtos')}
          >
            Ver Produtos
          </PageLink>
        </ContainerLeft>
        <ContainerRight>
          <PageLink onClick={() => push('/carrinho')}>
            <img src={iconCart} alt="Ícone de carrinho" />
            {finalItems > 0
              ? (
              <span className="notficationCart">{finalItems}</span>
                )
              : (
              <></>
                )}
          </PageLink>
          <div className="barra"></div>
          <PageLink>
            <img src={person} alt="logo pessoa" />
          </PageLink>

          <ContainerText>
            <p>Olá, {userData.name}</p>
            <PageLinkExit
              onClick={() => {
                logout()
                push('/login')
              }}
            >
              Sair
            </PageLinkExit>
          </ContainerText>
        </ContainerRight>
      </Container>
      <MenuDevice>
        <BottomNavigationStyle
          sx={{ width: 500 }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationActionStyle
            label="Minha Conta"
            value="conta"
            icon={<AccountCircleSharpIcon style={{ color: 'white' }} />}
          />
          <BottomNavigationActionStyle
            label="Home"
            value="home"
            icon={<HomeSharpIcon style={{ color: 'white' }} />}
          >
            <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
              Home
            </PageLink>
          </BottomNavigationActionStyle>

          <BottomNavigationActionStyle
            label="Produtos"
            value="produtos"
            icon={<FastfoodRoundedIcon style={{ color: 'white' }} />}
          />
          <BottomNavigationActionStyle
            label="Cart"
            value="cart"
            icon={
              <ShoppingCartSharpIcon
                style={{ color: 'white' }}
                onClick={() => push('/carrinho')}
              >
                {finalItems > 0
                  ? (
                  <span className="notficationCart">{finalItems}</span>
                    )
                  : (
                  <></>
                    )}
              </ShoppingCartSharpIcon>
            }
          ></BottomNavigationActionStyle>
        </BottomNavigationStyle>
      </MenuDevice>
    </>
  )
}
