import React from 'react'
import CustomLink from './CustomLink'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <header>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/posts'>Blog</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </header>

        <main>
            <Outlet/>
        </main>

        <footer>
            &copy; React Router 2024
        </footer>
    </div>
  )
}

export default Layout