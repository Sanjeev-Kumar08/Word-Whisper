import React from 'react'
import Logo from '../Logo'
import LogoutBtn from './LogoutBtn'
import Container from '../Container/Container'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';


function Header() {

  // Take the Status of the User if it is active or not (Logged IN or Logged OUT)
  const authStatus = useSelector((state) => state.auth.status)
  // authStatus = true (LogIn)
  // authStatus = false (LogOut)

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='sm:py-3 py-5 shadow bg-gradient-to-r from-cyan-500 via-cyan-300 to-blue-500 border-b-2 border-gray-800'>
    <Container>
      <nav className='w-full flex justify-center items-center'>
       
          <Link to="/">
            <Logo/>
          </Link>


        <ul className='flex ml-auto items-center'>
          {
            navItems.map((item) => 
            item.active ?
              (<li className='sm:m-4 m-0'  key={item.name}>
                <NavLink 
                  to={item.slug} 
                  className={`sm:px-6 sm:py-2 px-4 py-2 text-white sm:text-lg text-md rounded-full ${
                    location.pathname === item.slug ? "bg-red-600 font-semibold" : "transfrom transition-all duration-100 hover:border-b-2 hover:border-black hover:font-semibold ease"
                  }`}
                >
                {item.name}
                </NavLink>
              </li>)
              : null
            )
          }
    
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )} 

        </ul>
      </nav>
    </Container>
  </header>
   )
}

export default Header;