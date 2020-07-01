import React from 'react'
import Icon from '@mdi/react'
import { mdiAccount } from '@mdi/js'
import logo from '../assets/static/logo.png'

const Home = () => {
  return (
    <>
      <div className="px-12 max-w-xl mx-auto text-center">
        <img className="lg:ml-12 w-auto" src={logo} alt="logo-empresa" />
        <h1 className="text-3xl font-bold text-gray-700">
          Descripción del aplicativo
        </h1>
        <p className="mt-2 text-gray-600">
          Herramienta de desarrollo web que anida procesos contables y
          financieros, minimizando en la menor cantidad de pasos posibles el
          registro y generación de información para el control, manejo y toma de
          decisiones de tu negocio.
        </p>
        <hr className="mt-3 mb-3 max-w-md" />
      </div>
      <div className="mt-3">
        <h2 className="text-3xl font-bold text-center text-gray-700">
          Características
        </h2>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:flex-1 md:flex-1 sm:flex-2 mx-2 my-3 rounded overflow-hidden shadow-lg">
              <div className="px-6 py-3">
                <div className="font-bold text-xl mb-2 text-gray-800">
                  {/* <Icon
                    path={mdiAccount}
                    title="Icon characteristic"
                    size={5}
                  /> */}
                </div>
                <p className="text-gray-600">
                  Automatiza todos tus procesos contables, sin cuentas, ni
                  conceptos, ni registros, informes detallados
                </p>
              </div>
            </div>

            <div className="lg:flex-1 md:flex-1 sm:flex-2 mx-2 my-3 rounded overflow-hidden shadow-lg">
              <div className="px-6 py-3">
                <div className="font-bold text-xl mb-2 text-gray-800">
                  {/* <Icon
                    path={mdiAccount}
                    title="Icon characteristic"
                    size={5}
                  /> */}
                </div>
                <p className="text-gray-600">
                  Costos fijos, sin contratos, las mejores tarifas que puedes
                  encontrar en el mercado
                </p>
              </div>
            </div>

            <div className="lg:flex-1 md:flex-1 sm:flex-2 mx-2 my-3 rounded overflow-hidden shadow-lg">
              <div className="px-6 py-3">
                <div className="font-bold text-xl mb-2 text-gray-800">
                  {/* <Icon
                    path={mdiAccount}
                    title="Icon characteristic"
                    size={5}
                  /> */}
                </div>
                <p className="text-gray-600">
                  Registra, Revisa y trabaja desde cualquier lugar con internet,
                  optimiza tu tiempo y productividad
                </p>
              </div>
            </div>

            <div className="lg:flex-1 md:flex-1 sm:flex-2 mx-2 my-3 rounded overflow-hidden shadow-lg">
              <div className="px-6 py-3">
                <div className="font-bold text-xl mb-2 text-gray-800">
                  {/* <Icon
                    path={mdiAccount}
                    title="Icon characteristic"
                    size={5}
                  /> */}
                </div>
                <p className="text-gray-600">
                  Asesorías contables, financieras, y tributarias
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default Home
