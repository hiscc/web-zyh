/*
 * @Author: km2021
 * @Date: 2022-06-20 16:09:41
 * @LastEditTime: 2022-06-23 23:12:07
 * @Description:
 * @FilePath: /web-zyh/components/navbar.js
 *
 */

import Block from '../components/Block'
import Image from 'next/image'
import ActiveLink from './ActiveLink.tsx'
import styles from '../styles/Nav.module.css'
import React, { useState } from 'react'


export default function navbar() {
  const [menuShow, setMenushow] = useState(false)
  const handleToggle = () => {
    setMenushow((val) => !val)
  }
  const menuList = [
    { title: '首页', link: '/' },
    { title: '产品与服务', link: '/product2' },
    { title: '解决方案', link: '/product1' },
    { title: '新闻中心', link: '/news' },
    { title: '关于我们', link: '/about' },
  ]

  return (
    <Block w="100%" className={styles.container}>
      <Block flex column wmax={1200} w="100%" margin={[0, 'auto']} className={styles.menuMobile}>
        <Block flex row space="between" padding={[10, 20]} lineHeight={80} center>
          <Block w={78} h={26}>
            <Image src='/home/logo-black.png' layout="fill" />
          </Block>
          <Block w={40} h={20} onClick={handleToggle}>
            <Image src="/home/menu.png" layout="fill" />
          </Block>
        </Block>

        {!!menuShow && (
          <Block column bg="#fff" flex w="100%" style={{ position: 'absolute', top: 46, zIndex: 20 }}>
            {menuList.map((menu) => {
              return (
                <ActiveLink key={menu.title} activeClassName="active" href={menu.link}>
                  <Block
                    onClick={() => setMenushow(false)}
                    s={14}
                    key={menu}
                    margin={[10, 20]}
                    color="#333333"
                    className="menu-item"
                  >
                    {menu.title}
                  </Block>
                </ActiveLink>
              )
            })}
          </Block>
        )}
      </Block>
      <Block flex h={80} wmax={1200} w="100%" margin={[0, 'auto']} center className={styles.menu}>
        <Block flex="1" space="between" center h={80} lineHeight={80}>
          <Block flex center>
            <Block w={146} h={52}>
              <Image src="/home/logo-black.png" layout="fill" />
            </Block>
          </Block>
          {menuList.map((menu) => {
            return (
              <ActiveLink key={menu.title} activeClassName="active" href={menu.link}>
                <Block s={14} key={menu} color="#333333" className="menu-item">
                  {menu.title}
                </Block>
              </ActiveLink>
            )
          })}

          <Block flex color="white" bg="#AB1E23" center padding={[0, 30]}>
            <Block fixed={18} margin={[0, 12, 0, 0]}>
              <Image src="/about/person.png" layout="fill" />
            </Block>
            <Block flex center>
              <Block>登录</Block>
              <Block margin={[0, 6]} bg="white" w={2} h={12}></Block>
              <Block>注册</Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  )
}
