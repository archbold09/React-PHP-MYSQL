import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setIsLoading(true)
    const URL =
      'http://localhost/react-php-login/controllers/mainControllers.php'

    const getUsers = () => {
      axios
        .post(URL, {
          data: {
            petition: 'list',
          },
        })
        .then((res) => {
          setUsers(res.data.array)
          setIsLoading(false)
        })
        .catch((error) => console.log(`errors: ${error.message}`))
    }

    getUsers()
  }, [setUsers])

  return (
    <>
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="lg:w-2/6 sm:w-full mx-12 my-12">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                placeholder="ejemplo@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                to="/forgotPassword"
              >
                Olvidé mi contraseña
              </Link>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Login
