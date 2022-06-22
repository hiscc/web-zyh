/*
 * @Author: km2021
 * @Date: 2022-06-20 16:09:41
 * @LastEditTime: 2022-06-22 15:15:50
 * @Description:
 * @FilePath: /web-zyh/components/navbar.js
 *
 */

import Block from '../components/Block'
import Image from 'next/image'
import ActiveLink from './ActiveLink.tsx'

export default function navbar() {
  const menuList = [
    { title: '首页', link: '/' },
    { title: '产品与服务', link: '/' },
    { title: '解决方案', link: '/' },
    { title: '新闻中心', link: '/' },
    { title: '关于我们', link: '/about' },
  ]
  const Style = (
    <style jsx global>{`
      .menu-item:hover {
        cursor: pointer;
        color: #ab1e23 !important;
      }
      .active {
        color: #ab1e23 !important;
      }
    `}</style>
  )
  return (
    <Block w="100%">
      {Style}
      {
        <style jsx>{`
          .menu-item:hover {
            cursor: pointer;
            color: #ab1e23 !important;
          }
          .active {
            color: #ab1e23 !important;
          }
        `}</style>
      }
      <Block flex h={80} wmax={1200} w="100%" margin={[0, 'auto']} center>
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
