import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../constants/paths'
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
            onClick={() => push(paths.ListProducts)}
            isAdmin={userData.admin}
          >
            Administrador
          </PageLinkAdmin>
          <PageLink
            onClick={() => push(paths.HomeInit)}
            isActive={pathname === paths.HomeInit}
          >
            Home
          </PageLink>
          <PageLink
            onClick={() => push(paths.Products)}
            isActive={pathname.includes(paths.Products)}
          >
            Ver Produtos
          </PageLink>
        </ContainerLeft>
        <ContainerRight>
          <PageLink onClick={() => push(paths.Cart)}>
            <Bag isActive={pathname.includes(paths.Cart)} />
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
            <AccountCircleSharpIconStyle
              onClick={() => push(paths.User)}
              isActive={pathname === paths.User}
            />
          </PageLink>

          <ContainerText>
            <p>Olá, {userData.name}</p>
            <PageLinkExit
              onClick={() => {
                logout()
                push(paths.Public)
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
                onClick={() => push(paths.User)}
                isActive={pathname === paths.User}
              />
            </PageLink>
          </Icons>
          <Icons
            onClick={() => push(paths.HomeInit)}
            isActive={pathname === paths.HomeInit}
          >
            <PageLink>
              <HomeSharpIconStyle isActive={pathname === paths.HomeInit} />
            </PageLink>
          </Icons>
          <Icons>
            <PageLink
              onClick={() => push(paths.Products)}
              isActive={pathname.includes(paths.Products)}
            >
              <FastfoodRoundedIconStyle
                isActive={pathname.includes(paths.Products)}
              />
            </PageLink>
          </Icons>
          <Icons>
            <PageLink onClick={() => push(paths.Cart)}>
              <Bag isActive={pathname.includes(paths.Cart)} />
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
