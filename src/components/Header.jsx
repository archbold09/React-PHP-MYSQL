import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/static/logoLetraBlanca.png'
const Header = () => (
  <>
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <Link to="/">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="px-2 w-4/6 h-auto" src={logo} alt="logo_Empresa" />
        </div>
      </Link>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-row-reverse lg:mr-24 lg:w-auto">
        <div className="text-md font-semibold">
          <NavLink
            to="/"
            exact
            activeClassName="activeNav"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
          >
            Inicio
          </NavLink>
          <NavLink
            to="/us"
            exact
            activeClassName="activeNav"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/advisers"
            exact
            activeClassName="activeNav"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
          >
            Asesores
          </NavLink>
          <NavLink
            to="/login"
            exact
            activeClassName="activeNav"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white"
          >
            Iniciar Sesión
          </NavLink>
        </div>
      </div>
    </nav>
  </>
)
export default Header
