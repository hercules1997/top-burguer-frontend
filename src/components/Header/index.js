import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

// import iconCart from '../../assets/iconCart.png'
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
  MenuHeader,
  Icons,
  FastfoodRoundedIconStyle,
  HomeSharpIconStyle,
  ContainerMenu,
  Bag,
  AccountCircleSharpIconStyle
} from './style'

export function Header () {
  const { logout, userData } = useUser()
  const { cartProducts } = useCart()
  const [finalItems, setAllItems] = useState([])

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
            <Bag isActive={pathname.includes('/carrinho')} />
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

      <ContainerMenu>
        <MenuHeader>
          <Icons>
            <PageLink>
              <AccountCircleSharpIconStyle
                onClick={() => push('/usuario')}
                isActive={pathname === '/usuario'}
                style={{ color: 'white', fontSize: '35px' }}
              />
            </PageLink>
          </Icons>
          <Icons onClick={() => push('/')} isActive={pathname === '/'}>
            <PageLink>
              <HomeSharpIconStyle
                isActive={pathname === '/'}
                style={{ color: 'white', fontSize: '35px' }}
              />
            </PageLink>
          </Icons>
          <Icons>
            <PageLink
              onClick={() => push('/produtos')}
              isActive={pathname.includes('/produtos')}
            >
              <FastfoodRoundedIconStyle
                isActive={pathname.includes('/produtos')}
                style={{ color: 'white', fontSize: '35px' }}
              />
            </PageLink>
          </Icons>
          <Icons>
            <PageLink onClick={() => push('/carrinho')}>
              <Bag isActive={pathname.includes('/carrinho')} />
              {finalItems > 0
                ? (
                <span className="notficationCart">{finalItems}</span>
                  )
                : (
                <></>
                  )}
            </PageLink>
          </Icons>
        </MenuHeader>
      </ContainerMenu>
    </>
  )
}
