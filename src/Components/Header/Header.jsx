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
    <header className='py-3 shadow bg-gray-700 border-b-2 border-gray-800'>
    <Container>
      <nav className='w-full flex justify-center items-center'>
       
          <Link to="/">
            <Logo/>
          </Link>


        <ul className='flex ml-auto items-center'>
          {
          navItems.map((item) => 
           item.active ?
            (<li className='m-4'  key={item.name}>
              <NavLink 
              to={item.slug} 
              className={`px-6 py-2 duration-200 
              hover:shadow-white text-white text-lg rounded-full transition-all ease-in-out ${
                location.pathname === item.slug ? "bg-red-600 font-semibold" : "text-white"
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