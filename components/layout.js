/*
 * @Author: km2021
 * @Date: 2022-06-20 16:09:14
 * @LastEditTime: 2022-06-20 16:11:12
 * @Description: 
 * @FilePath: /web-zyh/components/layout.js
 * 
 */

import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}