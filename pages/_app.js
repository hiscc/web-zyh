/*
 * @Author: km2021
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2022-06-24 11:42:36
 * @Description:
 * @FilePath: /web-zyh/pages/_app.js
 *
 */
import '../styles/globals.css'

import Layout from '../components/layout'
import Block from '../components/Block'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>浙样红 - 让物流更简单</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>

        {/* <meta name="viewport" content="viewport-fit=cover" /> */}
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
