/*
 * @Author: km2021
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2022-06-22 10:24:12
 * @Description:
 * @FilePath: /web-zyh/pages/index.js
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
    <Block w="100%" bg="#000000" color="#FFFFFF" padding={[0, 0, 100]}>
      <Block flex w="100%" h={800}>
        <Image src="/home/banner.png" objectFit="cover" layout="fill" />
      </Block>

      <Block className="f1" margin={[0, 'auto']} flex padding={[100, 0, 0]} w="100%" h={1200}>
        <Block margin={[60, 30, 0, 300]}>
          <Block w={316} h={106}>
            <Image src="/home/i1.png" objectFit="cover" layout="fill" />
          </Block>
          <Block margin={[24, 0]}>
            <Block color="#E11A22" s={26}>
              江西浙样红智能云平台有限公司
            </Block>
            <Block s={14}>JIANGXI ZHEYANGHONG INTELLIGENT CLOUD PLATFORM CO., LTD</Block>
          </Block>
          <Block lineHeight={31} wmax={500}>
            浙样红搭建的物流全产业链场景的基础平台和应用平台，涵盖供应链业务众包、智慧公路驿站、智能单元化运力、物流装备租售、能源补给、路桥通行、从业者灵活用工、供应链金融、税务筹划等业务环节和行业要素，实现业务场景的数字化，帮助万亿级的传统物流产业向智慧物流产业转型升级。
          </Block>
          <Block margin={[60, 0, 40]}>数字物流看中国，中国物流浙样红！</Block>

          <Block w={357} h={118}>
            <Image src="/home/f1-2.png" objectFit="cover" layout="fill" />
          </Block>
        </Block>
      </Block>

      <Block className="f2" margin={[0, 'auto', 0]} flex padding={[100, 0, 0]} w="100%" h={900}>
        <Block margin={[60, 30, 0, 300]}>
          <Block w={766} h={106}>
            <Image src="/home/i2.png" objectFit="cover" layout="fill" />
          </Block>
          <Block lineHeight={31} margin={[60, 0, 0]} wmax={500} color="#666666">
            通过智能业务推荐算法模型（往返对流、轻重搭配、储运结合）结合GIS地理位置空间路径优化算法、供需时间路径匹配算法等大数据手段实现物流行业的数字化和智慧化，打造全场景的物流产业互联网生态平台，为产业链上用户提供供应链业务匹配、物流要素配置、金融/财税增值服务的综合解决方案，帮助用户成功、为自己创造价值。
          </Block>
        </Block>
      </Block>

      <Block className="f3" margin={[0, 'auto', 0]} flex padding={[100, 0, 0]} w="100%" h={900}>
        <Block margin={[60, 30, 0, 300]}>
          <Block w={291} h={106}>
            <Image src="/home/i3.png" objectFit="cover" layout="fill" />
          </Block>
          <Block lineHeight={31} margin={[120, 0, 0]} wmax={1360} padding={70} bg="#AB1E23" flex>
            <Block w="50%">
              <Block s={30} lineHeight={39}>
                行业研究:浅谈网络货运发展状况与 2021未来趋势!
              </Block>
              <Block margin={[30, 0]}>2021-02-21</Block>
              <Block>
                在2020年，物流行业发展过程中，网络货运成为热门，那么网络货运到底发展如何呢，在2021年物流人加入又应该了解哪些呢?网络货运的未来应该向何处发展呢?
              </Block>
              <Block margin={[30, 0]} flex style={{ 'align-items': 'flex-end' }}>
                <Block s={48}>02</Block>
                <Block s={24} margin={[0, 12, 0, 12]}>
                  /
                </Block>
                <Block s={30}>03</Block>
              </Block>
            </Block>
            <Block w="60%" h={480} bg="yellow" style={{ right: '-10%', top: -200 }}>
              <Image src="/home/f3-1.png" objectFit="cover" layout="fill" />
            </Block>
          </Block>
        </Block>
      </Block>

      <Block className="f4" margin={[0, 'auto', 0]} padding={[100, 0, 0]} w="100%" h={1050}>
        <Block margin={[60, 30, 0, 300]}>
          <Block w={420} h={106}>
            <Image src="/home/i4.png" objectFit="cover" layout="fill" />
          </Block>
          <Block flex wrap margin={[54, -20]} space="between">
            {[1, 2, 3, 4].map((icon) => {
              return (
                <Block key={icon} flex={1} w="45%" margin={[20]} h={260} border borderColor="#EBEBEB">
                  <Image src={`/home/f4-${icon}.png`} objectFit="cover" layout="fill" />
                </Block>
              )
            })}
          </Block>
        </Block>
      </Block>
    </Block>
  )
}
