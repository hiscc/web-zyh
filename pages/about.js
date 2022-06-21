/*
 * @Author: km2021
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2022-06-21 16:25:03
 * @Description:
 * @FilePath: /web-zyh/pages/about.js
 *
 */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Block from '../components/Block'

const label = (title, titleEn) => {
  return (
    <Block color="white" lineHeight="1.5em" flex row>
      <Block padding={[2, 8]} bg="#001728">
        {title}
      </Block>
      <Block padding={[2, 12]} bg="#E11A22">
        {titleEn}
      </Block>
    </Block>
  )
}
export default function Home() {
  return (
    <Block>
      <Block w="100%" bg="black" flex>
        <Block margin={[0, 'auto']} wmax={1200} w="100%" h={400} flex center>
          <Block color="#FFFFFF" fBasis="600px">
            <Block h={30}>关于我们</Block>
            <Block color="#626262">ABOUT US</Block>
          </Block>
          <Block flex fBasis="600px" h={400}>
            <Image src="/about/banner.png" alt="Vercel Logo" layout="fill" />
          </Block>
        </Block>
      </Block>

      <Block padding={[80, 0, 100]} style={{ 'max-width': 1200 }} w="100%" margin={[0, 'auto']}>
        {label('公司简介', 'COMPANY PROFILE')}

        <Block color="#333333" lineHeight="48px" margin={[60, 0]}>
          浙样红搭建的物流全产业链场景的基础平台和应用平台，涵盖供应链业务众包、智慧公路驿站、智能单元化运力、物流装备租售、能源补给、路桥通行、从业者灵活用工、供应链金融、税务筹划等业务环节和行业要素，实现业务场景的数字化，帮助万亿级的传统物流产业向智慧物流产业转型升级。
        </Block>

        {label('联系方式', 'CONTACT INFORMATION')}

        <Block margin={[60, 0, 0, 0]} w="100%" h="300px">
          <Image src="/about/map.png" alt="Vercel Logo" layout="fill" />
        </Block>

        <Block color="#666666" margin={[60, 0, 80, 0]}>
          <Block className={styles.Block} flex>
            <Block w={20} h={20} margin={[0, 10, 0, 0]}>
              <Image src="/about/kehurexian.png" alt="Vercel Logo" layout="fill" />
            </Block>
            <Block>
              <Block>客户服务热线 7*12小时</Block>
              <Block s={24} color="#E11A22" margin={[8, 0, 0]}>
                133 6708 9060
              </Block>
            </Block>
          </Block>

          <Block className={styles.Block} flex margin={[20, 0, 0, 0]}>
            <Block w={20} h={20} margin={[0, 10, 0, 0]}>
              <Image src="/about/kehurexian.png" alt="Vercel Logo" layout="fill" />
            </Block>
            <Block>
              <Block>企业业务服务邮箱</Block>
              <Block color="#333333" margin={[8, 0, 0]}>
                ********@zhy.com
              </Block>
            </Block>
          </Block>

          <Block className={styles.Block} flex margin={[20, 0, 0, 0]}>
            <Block w={20} h={20} margin={[0, 10, 0, 0]}>
              <Image src="/about/xxdzhi.png" alt="address" layout="fill" />
            </Block>
            <Block>
              <Block>详细地址</Block>
              <Block color="#333333" margin={[8, 0, 0]}>
                江西省南昌市红谷滩新区金融大街777号博能金融中心1801室
              </Block>
            </Block>
          </Block>
        </Block>

        {label('求职信息', 'JOB INFORMATION')}

        <Block margin={[60, 0, 0, 0]} w="100%" h="300px">
          <Image src="/about/joinus.png" alt="Vercel Logo" layout="fill" />
        </Block>

        <Block color="#666666" margin={[60, 0, 0, 0]}>
          <Block className={styles.Block} flex>
            <Block w={20} h={20} margin={[0, 10, 0, 0]}>
              <Image src="/about/kehurexian.png" alt="Vercel Logo" layout="fill" />
            </Block>
            <Block>
              <Block>求职联系电话</Block>
              <Block s={24} color="#E11A22" margin={[8, 0, 0]}>
                133 6708 9060
              </Block>
            </Block>
          </Block>

          <Block className={styles.Block} flex margin={[20, 0, 0, 0]}>
            <Block w={20} h={20} margin={[0, 10, 0, 0]}>
              <Image src="/about/kehurexian.png" alt="Vercel Logo" layout="fill" />
            </Block>
            <Block>
              <Block>简历投递邮箱</Block>
              <Block color="#333333" margin={[8, 0, 0]}>
                ********@zhy.com
              </Block>
            </Block>
          </Block>

          <Block className={styles.Block} flex margin={[20, 0, 0, 0]}>
            <Block w={20} h={20} margin={[0, 10, 0, 0]}>
              <Image src="/about/xxdzhi.png" alt="address" layout="fill" />
            </Block>
            <Block>
              <Block>详细地址</Block>
              <Block color="#333333" margin={[8, 0, 0]}>
                江西省南昌市红谷滩新区金融大街777号博能金融中心1801室
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  )
}
