/*
 * @Author: km2021
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2022-06-24 00:33:47
 * @Description:
 * @FilePath: /web-zyh/pages/product2.js
 *
 */
import Head from 'next/head'
import ExportedImage from "next-image-export-optimizer";
import styles from '../styles/Product2.module.css'
import Block from '../components/Block'

const label = (title, titleEn, reverse = false) => {
  return (
    <Block color={reverse ? '#ffffff' : '#E11A22'} lineHeight="1.5em" flex row margin={[30, 0]}>
      <Block padding={[2, 8]} bg={reverse ? '#001728' : '#FFFFFF'}>
        {title}
      </Block>
      <Block padding={[2, 12]} bg="#E11A22" color="#FFFFFF">
        {titleEn}
      </Block>
    </Block>
  )
}
export default function Home() {
  return (
    <Block color="#333">
      <Block w="100%" bg="black" flex className={styles.b1}>
        <Block padding={[80, 0]} wmax={1200} w="100%" color="#FFFFFF" margin={[0, 'auto']}>
          <Block flex column>
            <Block>
              <Block s={26} color="#E11A22">
                ETC电子发票数据服务
              </Block>
              <Block s={14} margin={[8, 0, 0]}>
                ETC ELECTRONIC INVOICE DATA SERVICE
              </Block>
            </Block>

            <Block margin={[12, 0, 0]} lineHeight={30}>
              ETC在物流运输领域最高成本占比可达30%左右，尤其是长途运输中的占比更可达35%，是物流运输企业重要的成本项之一。物流企业大量采用社会车辆，需要司机在业务开始前在票根软件中绑定对应物流企业，企业才可以获得对应的ETC通行票据。司机普遍配合意愿低，导致企业获取ETC票据难。同时，社会大量存在的黄牛将司机ETC票根系统发票违规绑定出售现象，对购票企业造成严重的税务风险，浙江等地已有国税专项稽查企业千万ETC进项转出的案例出现。
              浙样红ETC电子发票数据服务是与交通运输部路网中心行云数据平台进行的专项接口开发，通过物流企业提供运单、平台轨迹验真校验后的数据提交总局核准的通行费电子发票平台代客户取得路桥公司开具的ETC电子发票的方式为客户服务。
            </Block>
          </Block>

          {label('服务优势', 'SERVICE ADVANTAGES')}

          <Block flex wrap className={styles.column}>
            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={30} h={24} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f1-1.png" layout="fill" objectFit="cover" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={96} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" fShrink="0" margin={[4, 10, 0, 0]} />
                <Block>专业接口取票 优先级更高</Block>
              </Block>
            </Block>

            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={30} h={24} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f1-2.png" layout="fill" objectFit="contain" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={208} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" fShrink="0" margin={[4, 10, 0, 0]} />
                <Block>智能系统运单模板导入或客户 TMS系统接口对接更便捷</Block>
              </Block>
            </Block>

            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={24} h={24} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f1-3.png" layout="fill" objectFit="cover" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={208} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" fShrink="0" margin={[4, 10, 0, 0]} />
                <Block>系统验真运单轨迹获得 对应通行票据更合规</Block>
              </Block>
            </Block>

            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={24} h={24} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f1-4.png" layout="fill" objectFit="cover" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={114} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" fShrink="0" margin={[4, 10, 0, 0]} />
                <Block>运单与通行发票 关联税务更放心</Block>
              </Block>
            </Block>

            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={24} h={24} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f1-5.png" layout="fill" objectFit="cover" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={140} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" fShrink="0" margin={[4, 10, 0, 0]} />
                <Block>取票成本低有效降 低整体税负成本</Block>
              </Block>
            </Block>
          </Block>

          {label('业务流程', 'OPERATION FLOW')}

          <Block flex color="#333333" wrap>
            {[
              '受票企业注册',
              '注册审批完成获得路网中心企业编号',
              '系统导入运单或系统对接传入运单',
              '平台验真运单',
              '验真通过取票',
              '企业下载汇总表和电子发票包',
            ].map((item, index) => {
              return (
                <Block
                  key={item}
                  flex
                  w={270}
                  h={110}
                  className={styles.card}
                  middle
                  margin={[0, 30, 20, 0]}
                  bg="#F4F4F4"
                  radius={6}
                  center
                >
                  <Block
                    bg="#E11A22"
                    color="#FFFFFF"
                    s={14}
                    style={{ position: 'absolute', right: 0, top: 0 }}
                    padding={[7, 6]}
                  >
                    0{index + 1}
                  </Block>
                  <Block fixed={50} fShrink={0}>
                    <ExportedImage src={`/static/product2/i1-${index + 1}.png`} layout="fill" objectFit="cover" />
                  </Block>
                  <Block s={14} w={128} margin={[0, 0, 0, 12]} flex row>
                    {item}
                  </Block>
                </Block>
              )
            })}
          </Block>
        </Block>
      </Block>

      <Block w="100%" bg="black" flex className={styles.b2}>
        <Block padding={[80, 0]} wmax={1200} w="100%" margin={[0, 'auto']}>
          <Block flex column>
            <Block>
              <Block s={26} color="#E11A22">
                撮合交易司机专票代开服务
              </Block>
              <Block s={14} margin={[8, 0, 0]}>
                MATCHMAKING TRANSACTION DRIVER SPECIAL TICKET ISSUING SERVICE
              </Block>
            </Block>

            <Block margin={[12, 0, 0]} lineHeight={30}>
              传统物流中司机收入成本占比在30%-40%左右，网络货运业务中由于其他成本无法获取以司机成本替代导致占比更高。当前全国获得网络货运牌照的企业超过2000家，但真正获得税务局撮合交易司机代开资质，同时获得纳税人委托代办模式或者税务局委托代征模式的企业非常少，受制于技术能力限制能全链条能打通正常开展撮合交易代开业务的全国不超过5家。浙样红旗下有三家获得江西委托代办、委托代征和贵州委托代办资质可以为客户稳定提供撮合交易司机专票代开服务。
            </Block>
          </Block>

          {label('服务优势', 'SERVICE ADVANTAGES', true)}

          <Block flex wrap className={styles.column}>
            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={30} h={26} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f2-1.png" layout="fill" objectFit="cover" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={160} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" fShrink="0" margin={[4, 10, 0, 0]} />
                <Block>平台资质完备流程 与文件规范合理</Block>
              </Block>
            </Block>

            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={30} h={26} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f2-2.png" layout="fill" objectFit="cover" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={160} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" fShrink="0" margin={[4, 10, 0, 0]} />
                <Block>平台风控系统功能强大 业务自检自控能力强</Block>
              </Block>
            </Block>

            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={22.5} h={26} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f2-3.png" layout="fill" objectFit="cover" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={192} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" fShrink="0" margin={[4, 10, 0, 0]} />
                <Block>代开增值税专用发票可抵扣 较单纯成本普票成本更低</Block>
              </Block>
            </Block>
          </Block>

          {label('业务流程', 'OPERATION FLOW', true)}

          <Block flex color="#333333" wrap>
            {[
              '受票企业注册',
              '提供运单清单与车辆证照资料',
              '平台校验运单轨迹及证照有效性',
              '平台代支付运费或提供司机运费支付资金流水号',
              '运管监管平台风控通过',
              '支付平台代缴税款',
              '平台出票及完税凭证',
            ].map((item, index) => {
              return (
                <Block
                  key={item}
                  className={styles.card}
                  flex
                  w={270}
                  h={110}
                  middle
                  margin={[0, 30, 20, 0]}
                  bg="#F4F4F4"
                  radius={6}
                  center
                >
                  <Block
                    bg="#E11A22"
                    color="#FFFFFF"
                    s={14}
                    style={{ position: 'absolute', right: 0, top: 0 }}
                    padding={[7, 6]}
                  >
                    0{index + 1}
                  </Block>
                  <Block fixed={50} fShrink={0}>
                    <ExportedImage src={`/static/product2/i2-${index + 1}.png`} layout="fill" objectFit="cover" />
                  </Block>
                  <Block s={14} w={128} margin={[0, 0, 0, 12]} flex row>
                    {item}
                  </Block>
                </Block>
              )
            })}
          </Block>
        </Block>
      </Block>

      <Block w="100%" color="#ffffff" bg="black" flex className={styles.b3}>
        <Block padding={[80, 0]} wmax={1200} w="100%" margin={[0, 'auto']}>
          <Block flex column>
            <Block>
              <Block s={26} color="#E11A22">
                普通货物网络货运服务（9%税率）
              </Block>
              <Block s={14} margin={[8, 0, 0]}>
                GENERAL CARGO NETWORK FREIGHT SERVICE (9% TAX RATE)
              </Block>
            </Block>

            <Block margin={[12, 0, 0]} lineHeight={30}>
              浙样红旗下多家平台为客户提供普通货物网络货运服务，通过与客户签订网络货运承运合同承接客户运输业务，由平台聚合车队和个体车辆进行实际承运，由平台代个体车辆向主管税务机关代开专票缴纳税控列支成本。
            </Block>
          </Block>

          {label('服务优势', 'SERVICE ADVANTAGES')}

          <Block flex wrap className={styles.column}>
            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={30} h={28} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f3-1.png" layout="fill" objectFit="cover" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={220} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" margin={[4, 10, 0, 0]} />
                <Block>多年物流管理与网络货运经验 打造最懂物流的平台流程</Block>
              </Block>
            </Block>

            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={30} h={24} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f3-2.png" layout="fill" objectFit="contain" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={228} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" margin={[4, 10, 0, 0]} />
                <Block>浙样红统一SaaS版TMS云平台 功能强大单据流转更顺畅</Block>
              </Block>
            </Block>

            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={30} h={30} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f3-3.png" layout="fill" objectFit="cover" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={208} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" margin={[4, 10, 0, 0]} />
                <Block>十亿级平台业务规模积累丰富 资源运力解决方案更多元</Block>
              </Block>
            </Block>

            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={30} h={26} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f3-4.png" layout="fill" objectFit="cover" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={258} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" margin={[4, 10, 0, 0]} />
                <Block>政府重点招商引资企业享受政府优惠 财税政策有效降低税负成本</Block>
              </Block>
            </Block>
          </Block>

          {label('业务流程', 'OPERATION FLOW')}

          <Block flex color="#333333" wrap>
            {[
              '客户与平台签订业务合同',
              '平台日常系统录入客户订单',
              '系统匹配承运车辆生成运单',
              '发运在途送达签收确认完成运输',
              '系统支付司机运费',
              '平台主管税务机关代开司机成本发票',
              '为客户开具9%税率增值税专用发票',
              '客户结算付款',
            ].map((item, index) => {
              return (
                <Block
                  key={item}
                  className={styles.card}
                  flex
                  w={270}
                  h={110}
                  middle
                  margin={[0, 30, 20, 0]}
                  bg="#F4F4F4"
                  radius={6}
                  center
                >
                  <Block
                    bg="#E11A22"
                    color="#FFFFFF"
                    s={14}
                    style={{ position: 'absolute', right: 0, top: 0 }}
                    padding={[7, 6]}
                  >
                    0{index + 1}
                  </Block>
                  <Block fixed={50} fShrink={0}>
                    <ExportedImage src={`/static/product2/i3-${index + 1}.png`} layout="fill" objectFit="cover" />
                  </Block>
                  <Block s={14} w={128} margin={[0, 0, 0, 12]} flex row>
                    {item}
                  </Block>
                </Block>
              )
            })}
          </Block>
        </Block>
      </Block>

      <Block w="100%" bg="black" flex className={styles.b2}>
        <Block padding={[80, 0]} wmax={1200} w="100%" margin={[0, 'auto']}>
          <Block flex column>
            <Block>
              <Block s={26} color="#E11A22">
                土石方专业网络货运服务（9%税率）
              </Block>
              <Block s={14} margin={[8, 0, 0]}>
                EARTHWORK PROFESSIONAL NETWORK FREIGHT SERVICE (9% TAX RATE)
              </Block>
            </Block>

            <Block margin={[12, 0, 0]} lineHeight={30}>
              土石方专业场景解决方案，浙样红旗下撮合交易司机代开平台完善成本链条，为客户实现全自动化流程下单、装车发运、到达消纳、司机运费结算、获得平台网路货运专票的便捷服务。
            </Block>
          </Block>

          {label('服务优势', 'SERVICE ADVANTAGES', true)}

          <Block flex wrap className={styles.column}>
            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={30} h={30} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f4-1.png" layout="fill" objectFit="cover" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={100} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" margin={[4, 10, 0, 0]} />
                <Block>全流程自动化</Block>
              </Block>
            </Block>

            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={30} h={30} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f4-2.png" layout="fill" objectFit="cover" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={120} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" margin={[4, 10, 0, 0]} />
                <Block>卸土点保密措施</Block>
              </Block>
            </Block>

            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={30} h={28} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f4-3.png" layout="fill" objectFit="cover" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={128} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" fShrink="0" margin={[4, 10, 0, 0]} />
                <Block>数据大屏全面展示 工程进展情况</Block>
              </Block>
            </Block>

            <Block flex column margin={[10, 60, 0, 0]} className={styles.row}>
              <Block w={26} h={30} margin={[0, 0, 0, 13]}>
                <ExportedImage src="/static/product2/f4-4.png" layout="fill" objectFit="cover" />
              </Block>
              <Block s={14} margin={[8, 0, 0]} w={128} flex row top className={styles.label}>
                <Block w={3} h={14} bg="#E11A22" fShrink="0" margin={[4, 10, 0, 0]} />
                <Block>合规资质平台全链条 数字化鉴证更安全</Block>
              </Block>
            </Block>
          </Block>

          {label('业务流程', 'OPERATION FLOW', true)}

          <Block flex color="#333333" wrap>
            {[
              '客户与平台签订业务合同',
              '客户录入项目基础信息、装卸土点电子围栏单次运费标准、车辆司机信息',
              '系统自动围栏触发生成订单/运单/完成发运/送达签收动作',
              '客户生成司机运费计算单',
              '系统支付并小结算单',
              '根据运营情况平台开具9%专票给客户',
              '平台税局代开司机成本发票并完税',
            ].map((item, index) => {
              return (
                <Block
                  key={item}
                  className={styles.card}
                  flex
                  w={270}
                  h={110}
                  middle
                  margin={[0, 30, 20, 0]}
                  bg="#F4F4F4"
                  radius={6}
                  center
                >
                  <Block
                    bg="#E11A22"
                    color="#FFFFFF"
                    s={14}
                    style={{ position: 'absolute', right: 0, top: 0 }}
                    padding={[7, 6]}
                  >
                    0{index + 1}
                  </Block>
                  <Block fixed={50} fShrink={0}>
                    <ExportedImage src={`/static/product2/i4-${index + 1}.png`} layout="fill" objectFit="cover" />
                  </Block>
                  <Block s={14} w={128} margin={[0, 0, 0, 12]} flex row>
                    {item}
                  </Block>
                </Block>
              )
            })}
          </Block>
        </Block>
      </Block>
    </Block>
  )
}
