/*
 * @Author: km2021
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2022-06-23 14:53:55
 * @Description:
 * @FilePath: /web-zyh/pages/news.js
 *
 */
import Head from 'next/head'
import ExportedImage from "next-image-export-optimizer";
import styles from '../styles/News.module.css'
import Block from '../components/Block'

const label = (title, titleEn, reverse = false) => {
  return (
    <Block lineHeight="1.5em" flex row margin={[30, 0]}>
      <Block padding={[2, 8]} color={'#ffffff'} bg={'#AB1E23'}>
        {title}
      </Block>
      <Block padding={[2, 12]} color="#999999">
        {titleEn}
      </Block>
    </Block>
  )
}
export default function Home() {
  return (
    <Block color="#333">
      <Block w="100%" h={400} className={styles.banner}></Block>

      <Block wmax={1200} row flex w="100%" space="between" margin={[100, 'auto']} className={styles.container}>
        <Block>
          {[
            {
              label: '公司新闻',
              time: '2021-02-21',
              title: '行业研究:浅谈网络货运发展状况与2021未来趋势!',
              content:
                '在2020年，物流行业发展过程中，网络货运成为热门，那么网络货运到底发展如何呢，在2021年物流人加入又应该了解哪些呢?网络货运的未来应该向何处发展呢?网络货运平台与托运人有业务委托的关系，同时委托实际承运人进行运输...',
            },
            {
              label: '公司新闻',
              time: '2021-02-21',
              title: '5月中国快递物流指数各业务量指数均有所回升',
              content:
                '中新财经6月6日 中国物流与采购联合会网站6日发布数据，5月中国快递物流指数为99.3%，比上月回升6.4个百分点。从分项指数看，商务快件指数为97.6%，比上月回升5.2个百分点；农村快件指数为99.4%，比上月回升14.8个百分点；跨境快件指数为101%，比上月回升6.5个百分点。',
            },
            {
              label: '公司新闻',
              time: '2021-02-21',
              title: '中国物流与采购联合会：5月全球制造业PMI为53.5%',
              content:
                '中新财经6月6日电 据中国物流与采购联合会网站6日发布，2022年5月份全球制造业PMI为53.5%，较上月上升0.3个百分点，结束连续2个月环比下降走势，但较去年同期下降3.7个百分点，较2022年一季度均值下降1.1个百分点。',
            },
            {
              label: '公司新闻',
              time: '2021-02-21',
              title: '交通运输部：4日全国货运物流有序运行、恢复向好',
              content:
                '中新财经6月5日电 5日，交通运输部微信公众号发布消息，根据国务院物流保通保畅工作领导小组办公室监测汇总数据，6月4日，全国货运物流有序运行、恢复向好。其中，国家铁路货运继续保持高位运行，运输货物1090.7万吨，环比增长0.31%国内货运航班...',
            },
          ].map((item, index) => {
            return (
              <Block node="a" flex column key={index} margin={[0, 0, 80, 0]} wmax={700} w="100%">
                <Block w="100%">
                  <Block w="100%" h={526} className={styles.pimg}>
                    <ExportedImage src={`/static/news/p${index + 1}.png`} layout="fill" />
                  </Block>
                  <Block className={styles.content}>
                    {label(item.label, item.time)}
                    <Block s={30} margin={[8, 0, 0]}>
                      {item.title}
                    </Block>
                    <Block margin={[20, 0, 0]} lineHeight={24} color="#666666">
                      {item.content}
                    </Block>
                  </Block>
                </Block>
              </Block>
            )
          })}
        </Block>

        <Block>
          {[
            {
              label: '行业新闻',
              time: '2021-02-21',
              title: '物流业如何过“最难618”？ 靠数字化转型提质增效',
              content:
                '受疫情反复的影响，今年的“618”电商促销节或许会成为有史以来的“最难618”。有消费者对《证券日报》记者透露，在“618”开启前一个月就已下单的商品，到现在...',
            },
            {
              label: '行业新闻',
              time: '2021-02-21',
              title: '运去哪收购跨境电商中大件物流服务商 COPE',
              content:
                '日前，国际物流数字化平台 " 运去哪 " 完成了对跨境电商物流品牌 COPE 的收购。通过本次收购，运去哪将进一步深化跨境电商供应链最后一公里的服务能力，强化...',
            },
            {
              label: '行业新闻',
              time: '2021-02-21',
              title: '“聚”起产业动能 “链”起物流生态300亿产业投资项目签约落户',
              content:
                '六月，仲夏之季、万物并秀；六日，芒种之时、忙种忙收。6月6日，北京市平谷区举行首都物流高地重大投资项目签约仪式，11家物流行业头部企业与马坊镇...',
            },
            {
              label: '行业新闻',
              time: '2021-02-21',
              title: '京东物流：2030年超80%电商产品将实现原装直发',
              content:
                '北京商报讯（记者 何倩）6月6日，京东物流发布原厂直发包装认证标准，并携手多个合作伙伴发布绿色包装新目标，即2030年实现80%以上电商渠道售卖的产品...',
            },
            {
              label: '行业新闻',
              time: '2021-02-21',
              title: '全国快递行业坚持创新开发 让快递速度更快',
              content:
                '央视网消息:近年来,全国快递行业不断利用互联网平台和云数据、智慧地图等科技手段,及时准确地把快递产品送往千家万户。今年端午期间,面对疫情带来的巨大压...',
            },
          ].map((item, index) => {
            return (
              <Block node="a" flex column key={index} margin={[0, 0, 80, 0]} wmax={400} w="100%">
                <Block w="100%">
                  <Block w="100%" h={300} className={styles.pimg}>
                    <ExportedImage src={`/static/news/s${index + 1}.png`} layout="fill" />
                  </Block>
                  <Block className={styles.content}>
                    {label(item.label, item.time)}
                    <Block s={26} margin={[8, 0, 0]} wmax={400}>
                      {item.title}
                    </Block>
                    <Block margin={[20, 0, 0]} lineHeight={24} color="#666666">
                      {item.content}
                    </Block>
                  </Block>
                </Block>
              </Block>
            )
          })}
        </Block>
      </Block>
    </Block>
  )
}
