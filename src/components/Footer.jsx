import React from 'react'
import Icon from '@mdi/react'
import { mdiPhone } from '@mdi/js'

const Footer = () => (
  <>
    <footer className="mt-12 text-center h-10 ">
      <div className="flex">
        <div className="w-1/3">
          <div className="text-md text-gray-800 font-bold">Facebook</div>
        </div>
        <div className="w-1/3">
          <div className="text-md text-gray-800 font-bold">Instagram</div>
        </div>
        <div className="w-1/3">
          <div className="text-md text-gray-800 font-bold">Youtube</div>
        </div>
      </div>
      <div className="flex flex-col bg-gray-500 h-12">
        <div className="text-gray-700 text-center bg-gray-400">
          {/* <Icon path={mdiPhone} color="blue" title="Icon" size={1} /> */}
          <p className="text-md text-gray-800 font-bold">Carlos Madiedo : 3173596963</p>
        </div>
        <div className="text-gray-700 text-center bg-gray-400">
          {/* <Icon path={mdiPhone} color="blue" title="Icon" size={1} /> */}
          <p className="text-md text-gray-800 font-bold">Angel Archbold : 3124484922</p>
        </div>
        <div className="text-gray-700 text-center bg-gray-400">
          {/* <Icon path={mdiPhone} color="blue" title="Icon" size={1} /> */}
          <p className="text-md text-gray-800 font-bold">accpyme.info@gmail.com</p>
        </div>

        <div className="text-center bg-black">
          <p className="text-md text-gray-800 font-bold">2020 — © ACC - PYME Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  </>
)
export default Footer
