/*
 * @Author: km2021
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2022-06-23 15:22:40
 * @Description:
 * @FilePath: /web-zyh/pages/product1.js
 *
 */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Product1.module.css'
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
  const Style = (
    <style jsx global>{`
      .bg1 {
        background: url('/product1/b1.png') no-repeat center,
        background-size: 'cover';
      }
    `}</style>
  )
  return (
    <Block color="#333">
      {Style}
      <Block w="100%" bg="black" flex className={styles.b1}>
        <Block padding={[80, 0]} wmax={1200} w="100%" margin={[0, 'auto']}>
          <Block flex column>
            <Block flex row>
              <Block w={40} h={36}>
                <Image src="/product1/i1.png" layout="fill" />
              </Block>
              <Block margin={[-8, 0, 0, 20]}>
                <Block s={30}>传统物流行业</Block>
                <Block row flex>
                  TRADITIONAL{' '}
                  <Block color="#F35158" margin={[0, 4]}>
                    LOGISTIC
                  </Block>
                </Block>
              </Block>
            </Block>

            <Block margin={[12, 0, 0]}>
              传统物流行业85%以上的运力来自于个体社会车辆，导致增值税进项税额不足、所得税成本票据缺失。
            </Block>
          </Block>

          <Block flex margin={[80, 0, 0]}>
            <Block w={187} h={205} wmin={187} className={styles.img}>
              <Image src="/product1/m1.png" layout="fill" />
            </Block>
            <Block flex margin={[0, 0, 0, 100]} className={styles.item}>
              <Block
                w="100%"
                h="100%"
                radius={14}
                style={{ position: 'absolute', top: -50, left: -50, right: 50, bottom: 50, overflow: 'auto' }}
              >
                <Image src="/product1/f1.png" layout="fill" objectFit="cover" />
              </Block>
              <Block padding={[32, 40]} bg="#FFF6F6" radius={14}>
                <Block s={20} margin={[4, 0]}>
                  具体体现在
                </Block>

                <Block flex margin={[12, 0]}>
                  <Block
                    fixed={16}
                    bg="transparent"
                    radius={50}
                    borderWidth={3}
                    border
                    borderColor={'#FF3841'}
                    fShrink="0"
                  />
                  <Block color="#666666" margin={[-3, 0, 0, 20]}>
                    无车辆设备成本载体列支成品油、路桥成本存在争议
                    <Block s={12} color="#999999">
                      （按照税总2017年第30号公告精神“自行采购并交给实际承运人使用的成品油和支付的道路、桥、闸通行费准予抵扣”仍需证明“应用于纳税人委托实际承运人完成的运输服务”）
                    </Block>
                  </Block>
                </Block>

                <Block flex margin={[12, 0]}>
                  <Block
                    fixed={16}
                    bg="transparent"
                    radius={50}
                    borderWidth={3}
                    border
                    borderColor={'#FF3841'}
                    fShrink="0"
                  />
                  <Block color="#666666" margin={[-3, 0, 0, 20]}>
                    临时委托运输难以获得ETC路桥发票
                  </Block>
                </Block>

                <Block flex margin={[12, 0]}>
                  <Block fixed={16} bg="transparent" radius={50} borderWidth={3} border borderColor={'#FF3841'} />
                  <Block color="#666666" margin={[-3, 0, 0, 20]}>
                    司机个人经营所得无票
                  </Block>
                </Block>

                <Block flex margin={[12, 0]}>
                  <Block fixed={16} bg="transparent" radius={50} borderWidth={3} border borderColor={'#FF3841'} />
                  <Block color="#666666" margin={[-3, 0, 0, 20]}>
                    各类业务成本占比的合理性
                  </Block>
                </Block>

                <Block color="#666666" flex row margin={[50, 0, 0]} className={styles.card}>
                  <Block padding={[36, 18]} margin={[0, 20, 0, 0]} radius={6} bg="#FFFFFF">
                    <Block node="p">根据客户实际</Block>
                    <Block node="p" margin={[4, 0]}>
                      业务场景分析
                    </Block>
                    <Block node="p">设定各成本结构比例</Block>
                  </Block>

                  <Block padding={[36, 18]} margin={[0, 20, 0, 0]} radius={6} bg="#FFFFFF">
                    <Block node="p">帮助客户建立</Block>
                    <Block node="p" margin={[4, 0]}>
                      以运单为载体的
                    </Block>
                    <Block node="p">票据链条</Block>
                  </Block>

                  <Block padding={[36, 18]} margin={[0, 20, 0, 0]} radius={6} bg="#FFFFFF">
                    <Block node="p">帮助客户通过技术</Block>
                    <Block node="p" margin={[4, 0]}>
                      通道获取ETC票据
                    </Block>
                    <Block node="p">个体司机发票</Block>
                  </Block>
                  <Block padding={[36, 18]} margin={[0, 20, 0, 0]} radius={6} bg="#FFFFFF">
                    <Block node="p">帮助符合条件的</Block>
                    <Block node="p" margin={[4, 0]}>
                      客户获得税收洼地的
                    </Block>
                    <Block node="p">财税政策</Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>

      <Block w="100%" bg="black" flex className={styles.b2}>
        <Block padding={[80, 0]} wmax={1200} w="100%" margin={[0, 'auto']}>
          <Block flex column>
            <Block flex row>
              <Block w={40} h={36}>
                <Image src="/product1/i2.png" layout="fill" />
              </Block>
              <Block margin={[-8, 0, 0, 20]}>
                <Block s={30}>网络货运平台</Block>
                <Block row flex>
                  NETWORK FREIGHT{' '}
                  <Block color="#FFA517" margin={[0, 4]}>
                    PLATFORM
                  </Block>
                </Block>
              </Block>
            </Block>

            <Block margin={[12, 0, 0]}>
              网络货运平台是交通运输部联合国税总局支持的创新尝试，仍然面临业务验真困境、真实业务证照难采集、
              轨迹非100%可查询、司机临时税务登记受限、车队长支付模式难以隔离资金回流风险等问题。
            </Block>
          </Block>

          <Block flex margin={[80, 0, 0]}>
            <Block w={187} h={205} wmin={187} className={styles.img}>
              <Image src="/product1/m2.png" layout="fill" />
            </Block>
            <Block flex margin={[0, 0, 0, 100]} className={styles.item}>
              <Block
                w="100%"
                h="100%"
                radius={14}
                style={{ position: 'absolute', top: -50, left: -50, right: 50, bottom: 50, overflow: 'auto' }}
              >
                <Image src="/product1/f2.png" layout="fill" objectFit="cover" />
              </Block>
              <Block padding={[32, 40]} bg="#FFF6F6" radius={14}>
                <Block s={20} className="title-with-line" flex center middle>
                  <Block w={60} h={1} bg="#FFA517" />
                  <Block margin={[0, 16]}>方案价值</Block>
                  <Block w={60} h={1} bg="#FFA517" />
                </Block>
                <Block color="#666666" flex wrap row margin={[36, 0, 0]}>
                  {[
                    '帮助客户建立符合自身业务模式的成本模型',
                    '帮助客户通过技术通道获取ETC票据',
                    '帮助客户提供资金支付及分账解决方案',
                    '帮助客户提供批量临登、批量开票批量申报技术方案',
                  ].map((title) => {
                    return (
                      <Block
                        key={title}
                        flex={1}
                        fBasis="calc(50% - 40px)"
                        h={156}
                        center
                        middle
                        padding={[36, 18]}
                        margin={[20]}
                        radius={6}
                        bg="#FFFFFF"
                        className={styles.card}
                      >
                        <Block node="p">{title}</Block>
                      </Block>
                    )
                  })}
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>

      <Block w="100%" bg="black" flex className={styles.b3}>
        <Block padding={[80, 0]} wmax={1200} w="100%" margin={[0, 'auto']}>
          <Block flex column>
            <Block flex row>
              <Block w={40} h={36}>
                <Image src="/product1/i3.png" layout="fill" />
              </Block>
              <Block margin={[-8, 0, 0, 20]}>
                <Block s={30}>土石方运输行业</Block>
                <Block row flex>
                  EARTHWORK{' '}
                  <Block color="#2E66E3" margin={[0, 4]}>
                    TRANSPORTATION
                  </Block>
                </Block>
              </Block>
            </Block>

            <Block margin={[12, 0, 0]}>
              土石方运输是一种专业的运输场景，是通过专业的开挖、装载、自卸装备，在施工地和合规的土石方消纳点之间进行的往返重复运输。
              土石方运输同样被传统物流运输业的问题所困扰，同时其还存在短途重复运输订单重复录入效率问题、司机不愿操作APP终端小程序不
              符合网络货运数字化要求无法开具司机发票、运输企业对土石方消纳点的保密要求等新问题。
            </Block>
          </Block>

          <Block flex margin={[80, 0, 0]}>
            <Block w={187} h={205} wmin={187} className={styles.img}>
              <Image src="/product1/m3.png" layout="fill" />
            </Block>
            <Block flex margin={[0, 0, 0, 100]} className={styles.item}>
              <Block
                w="100%"
                h="100%"
                radius={14}
                style={{ position: 'absolute', top: -50, left: -50, right: 50, bottom: 50, overflow: 'auto' }}
              >
                <Image src="/product1/f3.png" layout="fill" objectFit="cover" />
              </Block>
              <Block padding={[32, 40]} bg="#FFF6F6" radius={14}>
                <Block s={20} className="title-with-line" flex center middle>
                  <Block w={60} h={1} bg="#FFA517" />
                  <Block margin={[0, 16]}>方案价值</Block>
                  <Block w={60} h={1} bg="#FFA517" />
                </Block>
                <Block color="#666666" flex wrap row margin={[36, 0, 0]}>
                  {[
                    '帮助企业进行项目资料（装卸土点、车辆资料）和订单运单模板登记，围栏出发自动创建订单、自动到达确认完成单的一整套全自动化操作流程；',
                    '帮助企业通过银企直连接口直接进行系统运单结算，管理更轻松、资金轨迹更合规',
                    '帮助企业上传网络货运数据获得司机发票或网络货运发票',
                    '大数据屏呈现，帮助企业轻松掌握工程运行情况',
                  ].map((title) => {
                    return (
                      <Block
                        key={title}
                        flex={1}
                        fBasis="calc(50% - 40px)"
                        h={156}
                        center
                        middle
                        padding={[36, 18]}
                        margin={[20]}
                        className={styles.card}
                        radius={6}
                        bg="#FFFFFF"
                      >
                        <Block node="p">{title}</Block>
                      </Block>
                    )
                  })}
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>

      <Block w="100%" bg="black" flex className={styles.b4}>
        <Block padding={[80, 0]} wmax={1200} w="100%" margin={[0, 'auto']}>
          <Block flex column>
            <Block flex row>
              <Block w={40} h={36}>
                <Image src="/product1/i4.png" layout="fill" />
              </Block>
              <Block margin={[-8, 0, 0, 20]}>
                <Block s={30}>工程机械租赁行业</Block>
                <Block row flex>
                  CONSTRUCTION MACHINERY{' '}
                  <Block color="#42D3C1" margin={[0, 4]}>
                    LEASING
                  </Block>
                </Block>
              </Block>
            </Block>

            <Block margin={[12, 0, 0]}>
              工程机械租赁占到建筑安装业整体产值的比重平均在5%左右，虽然占比不高，但是却是成本结构中
              重要的内容，是税务机关重点关注的建筑安装业成本票据之一。
            </Block>
          </Block>

          <Block flex margin={[80, 0, 0]}>
            <Block w={187} h={205} wmin={187} className={styles.img}>
              <Image src="/product1/m4.png" layout="fill" />
            </Block>
            <Block flex margin={[0, 0, 0, 100]} className={styles.item}>
              <Block
                w="100%"
                h="100%"
                radius={14}
                style={{ position: 'absolute', top: -50, left: -50, right: 50, bottom: 50, overflow: 'auto' }}
              >
                <Image src="/product1/f4.png" layout="fill" objectFit="cover" />
              </Block>
              <Block padding={[32, 40]} bg="#FFF6F6" radius={14}>
                <Block s={20} margin={[4, 0]}>
                  当前存在的主要问题
                </Block>

                <Block flex margin={[12, 0]}>
                  <Block
                    fixed={16}
                    bg="transparent"
                    radius={50}
                    borderWidth={3}
                    border
                    borderColor={'#42D3C1'}
                    style={{ 'flex-shrink': 0 }}
                  />
                  <Block color="#666666" margin={[-3, 0, 0, 20]}>
                    实际机械施工方个体经营居多，设备采购进项未取得或存量设备进项已抵扣，导致经营者不能提供增值税专用发票或为避税只愿提供3个点小规模代开发票
                  </Block>
                </Block>

                <Block flex margin={[12, 0]}>
                  <Block
                    fixed={16}
                    bg="transparent"
                    radius={50}
                    borderWidth={3}
                    border
                    borderColor={'#42D3C1'}
                    fShrink="0"
                  />
                  <Block color="#666666" margin={[-3, 0, 0, 20]}>
                    包工头提供的发票来源不可靠，经营遭遇发票风险提示被迫进项转出造成损失，影响纳税信用
                  </Block>
                </Block>

                <Block flex margin={[12, 0]}>
                  <Block
                    fixed={16}
                    bg="transparent"
                    radius={50}
                    borderWidth={3}
                    border
                    borderColor={'#42D3C1'}
                    fShrink="0"
                  />
                  <Block color="#666666" margin={[-3, 0, 0, 20]}>
                    工程发包方自购发票涉嫌虚假接受进项风险
                  </Block>
                </Block>

                <Block flex margin={[12, 0]}>
                  <Block
                    fixed={16}
                    bg="transparent"
                    radius={50}
                    borderWidth={3}
                    border
                    borderColor={'#42D3C1'}
                    fShrink="0"
                  />
                  <Block color="#666666" margin={[-3, 0, 0, 20]}>
                    目前的机械设备租赁平台/公司大量存在无实际设备开展租赁业务情况，面临巨大税收风险
                  </Block>
                </Block>

                <Block s={20} margin={[60, 0, 0]} className="title-with-line" flex center middle>
                  <Block w={60} h={1} bg="#42D3C1" />
                  <Block margin={[0, 16]}>方案价值</Block>
                  <Block w={60} h={1} bg="#42D3C1" />
                </Block>
                <Block color="#666666" flex wrap row margin={[40, 0, 0]}>
                  {[
                    '平台的自购设备比例高进项链条更清晰可靠',
                    '平台注册的社会设备资料齐全，设备工控系统定位佐证清晰，获得税局认可',
                    '平台代支付结算资金流更合规，无资金回流风险',
                  ].map((title) => {
                    return (
                      <Block
                        key={title}
                        flex={1}
                        fBasis="calc(33.3% - 40px)"
                        h={156}
                        center
                        middle
                        padding={[36, 18]}
                        margin={[20]}
                        radius={6}
                        bg="#FFFFFF"
                        className={styles.card}
                      >
                        <Block node="p">{title}</Block>
                      </Block>
                    )
                  })}
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  )
}
