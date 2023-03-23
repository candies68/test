import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
function Layout() {
  return (
    <div className='layout-container'>
      <Header></Header>
      <div className='layout-content'>
        <Outlet/>
      </div>
      <Footer></Footer>
    </div>
  )
}
export default Layout