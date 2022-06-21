/*
 * @Author: km2021
 * @Date: 1985-10-26 16:15:00
 * @LastEditTime: 2022-06-21 14:29:11
 * @Description: 
 * @FilePath: /web-zyh/pages/_app.js
 * 
 */
import '../styles/globals.css'

import Layout from '../components/layout'
import Block from '../components/Block'


function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
