/*
 * @Author: km2021
 * @Date: 2022-06-20 16:09:41
 * @LastEditTime: 2022-06-21 16:48:40
 * @Description:
 * @FilePath: /web-zyh/components/navbar.js
 *
 */

import Block from '../components/Block'
import Image from 'next/image'

export default function navbar() {
  return (
    <Block w="100%">
      <Block flex h={80} wmax={1200} w="100%" margin={[0, 'auto']} center>
        <Block flex="1" space="between" color="red" center h={80} lineHeight={80}>
          <Block flex center>
            <Block w={146} h={52}>
              <Image src="/home/logo-black.png" layout="fill" />
            </Block>
          </Block>
          {['首页', '产品与服务', '解决方案', '新闻中心', '关于我们'].map((menu) => {
            return (
              <Block key={menu} s={14} color="#333333">
                {menu}
              </Block>
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
