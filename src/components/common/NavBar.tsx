import { useState } from 'react'
// import { NavLink } from 'react-router-dom'

// import { SvgOutlineMenu, SvgOutlineX, VerticalNavigation } from '../tailwind-ui'
// import useMedia from '../../hooks/useMedia'
// import { routes, getCurrentRoute } from '../../navigation/routeHelper'

import hackuariumLogo from '../../assets/images/logo.svg'
import SvgOutlineX from '../../utils/svg/svgOutlineX'
import SvgOutlineMenu from '../../utils/svg/svgOutlineMenu'
import useMedia from '../../hooks/useMedia'

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
  const isSmallScreen = useMedia({
    queries: ['(max-width: 1023px)'],
    values: [true],
    defaultValue: false,
  })
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='m-0 p-0 w-full lg:w-max lg:h-full relative  bg-primary-900'>
      {/** Top NavBar in small screens */}
      <div className='px-4 flex flex-row justify-between items-center lg:hidden bg-blue-900'>
        <img src={hackuariumLogo} alt='Hackuarium Logo' className='h-10' />
        <button
          type='button'
          className='block focus:outline-none relative z-10'
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          {isOpen ? (
            <SvgOutlineX className='text-gray-300 hover:text-white focus:text-white h-6 w-6' />
          ) : (
            <SvgOutlineMenu className='text-gray-300 hover:text-white focus:text-white h-6 w-6' />
          )}
        </button>
      </div>

      {/** NavBar */}
      <nav
        className={
          // hide navbar by default for small screens
          isOpen || !isSmallScreen
            ? 'w-full lg:w-56 px-6 lg:px-2 flex flex-col justify-start flex-grow-0 absolute z-10 top-auto lg:static bg-primary-900'
            : 'hidden'
        }
      >
        {!isSmallScreen && (
          <div className='w-full flex justify-center pb-8 px-4 '>
            <img src={hackuariumLogo} alt='Hackuarium Logo' className='h-24' />
          </div>
        )}
        {/* <VerticalNavigation
          onSelect={onCloseMenu}
          // selected={selected}
          selected={getCurrentRoute(routes)}
          options={navbarOptions}
        /> */}
      </nav>

      {/*

      {/** on small screens: exit navbar when clicking anywhere in the screen */}
      {/* {isSmallScreen && isOpen && (
        <button
          className='fixed inset-0 h-full w-full cursor-default focus:outline-none'
          tabIndex='-1'
          onClick={onCloseMenu}
        />
      )} */}
    </header>
  )
}

export default NavBar
