/*
 * @Author: km2021
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2022-06-23 23:50:06
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
        <link rel="shortcut icon" href="/favicon.ico"/>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
