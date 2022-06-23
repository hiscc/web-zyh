/*
 * @Author: km2021
 * @Date: 2022-06-20 16:09:41
 * @LastEditTime: 2022-06-23 21:59:35
 * @Description:
 * @FilePath: /web-zyh/components/footer.js
 *
 */
import Block from '../components/Block'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export default function footer() {
  return (
    <Block bg="#282828">
      <Block
        wmax="1200px"
        w="100%"
        color="#FFFFFF"
        flex
        margin={[0, 'auto']}
        padding={[77, 0]}
        space="between"
        className={styles.container}
      >
        <Block flex column>
          <Block>首页</Block>
          <Block margin={[10, 0, 0, 0]}>
            {['业务范围', '通用税筹方案', '定制税筹方案', '企业简介', '合作伙伴', '新闻展示'].map((link) => {
              return (
                <Block node="a" className={styles.footerLink} key={link} margin={[12, 0]} color="#999999">
                  {link}
                </Block>
              )
            })}
          </Block>
        </Block>

        <Block flex column>
          <Block>产品与服务</Block>
          <Block margin={[10, 0, 0, 0]}>
            {['ETC电子发票数据服务', '撮合交易司机专票代开服务', '普通货物网络货运服务', '土石方专业网络货运服务'].map(
              (link) => {
                return (
                  <Block node="a" className={styles.footerLink} key={link} margin={[12, 0]} color="#999999">
                    {link}
                  </Block>
                )
              }
            )}
          </Block>
        </Block>

        <Block flex column>
          <Block>解决方案</Block>
          <Block margin={[10, 0, 0, 0]}>
            {['传统物流行业', '网络货运平台', '土石方运输行业', '工程机械租赁行业'].map((link) => {
              return (
                <Block node="a" className={styles.footerLink} key={link} margin={[12, 0]} color="#999999">
                  {link}
                </Block>
              )
            })}
          </Block>
        </Block>

        <Block flex column>
          <Block>新闻中心</Block>
          <Block margin={[10, 0, 0, 0]}>
            {['公司热点新闻', '行业热点新闻'].map((link) => {
              return (
                <Block node="a" className={styles.footerLink} key={link} margin={[12, 0]} color="#999999">
                  {link}
                </Block>
              )
            })}
          </Block>
        </Block>

        <Block flex column>
          <Block>关于我们</Block>
          <Block margin={[10, 0, 0, 0]}>
            {['公司介绍', '发展历程', '公司风采', '荣誉资质'].map((link) => {
              return (
                <Block className={styles.footerLink} node="a" key={link} margin={[12, 0]} color="#999999">
                  {link}
                </Block>
              )
            })}
          </Block>
        </Block>

        <Block flex column>
          <Block flex row>
            <Block w={20} h={20} margin={[0, 10, 0, 0]}>
              <Image src="/about/phone.png" layout="fill" />
            </Block>
            <Block>
              <Block>客户服务热线 7*12小时</Block>
              <Block s={24} color="#E11A22" margin={[8, 0, 0]}>
                133 6708 9060
              </Block>
            </Block>
          </Block>

          <Block flex row margin={[20, 0, 0]}>
            <Block w={20} h={20} margin={[0, 10, 0, 0]}>
              <Image src="/about/email-white.png" layout="fill" />
            </Block>
            <Block>
              <Block>企业业务服务邮箱</Block>
              <Block margin={[8, 0, 0]}>********@zhy.com</Block>
            </Block>
          </Block>

          <Block flex column margin={[20, 0]} middle center className={styles.qr}>
            <Block fixed={100} margin={[0, 10, 0, 0]}>
              <Image src="/about/qr.png" layout="fill" />
            </Block>
            <Block color="#999999" margin={[7, 0, 0]}>
              关注我们
            </Block>
          </Block>
        </Block>
      </Block>

      <Block bg="#1E1E1E" padding={20} color="#999999" center flex middle className={styles.footer}>
        Copyright ©2021-现在 浙样红 赣ICP备10011451号-6 ICP证书: 赣B2-20180057
      </Block>
    </Block>
  )
}
