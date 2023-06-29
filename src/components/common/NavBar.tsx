// import { useState } from 'react'
// import { NavLink } from 'react-router-dom'

// import { SvgOutlineMenu, SvgOutlineX, VerticalNavigation } from '../tailwind-ui'
// import useMedia from '../../hooks/useMedia'
// import { routes, getCurrentRoute } from '../../navigation/routeHelper'

import hackuariumLogo from '../../assets/images/logo.svg'

// Helper func: get only routes which has inNavbar=true
// const getNavbarOptions = (routes, onClick) =>
//   routes.reduce((routeList, route) => {
//     if (route.inNavbar) {
//       const { id, label, value, icon } = route
//       const renderOption =
//         route.component || route.render
//           ? (children, option) => (
//               <NavLink to={option.value} exact onClick={onClick}>
//                 {children}
//               </NavLink>
//             )
//           : undefined

//       const options = route.options // if route has sub routes (options)
//         ? getNavbarOptions(route.options)
//         : []

//       routeList.push({
//         type: options.length > 0 ? 'group' : 'option',
//         id,
//         label,
//         value,
//         icon,
//         renderOption,
//         options,
//       })
//     }
//     return routeList
//   }, [])

//
// Navbar Component

const NavBar = (): JSX.Element => {
  return (
    <header className='m-0 p-0 w-full lg:w-max lg:h-full relative  bg-primary-900'>
      {/** Top NavBar in small screens */}
      <div className='px-4 flex flex-row justify-between items-center lg:hidden bg-blue-900'>
        {/* <img
          src={process.env.PUBLIC_URL + '/logo.svg'}
          alt='Hackuarium Logo'
          className='h-10 '
        /> */}
        <img src={hackuariumLogo} alt='Hackuarium Logo' className='h-10' />
        <button
          type='button'
          className='block focus:outline-none relative z-10'
          onClick={() => {}}
        >
          {/* {isOpen ? (
            <SvgOutlineX className='text-gray-300 hover:text-white focus:text-white h-6 w-6' />
          ) : (
            <SvgOutlineMenu className='text-gray-300 hover:text-white focus:text-white h-6 w-6' />
          )} */}
        </button>
      </div>
    </header>
  )
}

export default NavBar
