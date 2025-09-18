import React from "react";
import Logo from "../Logo";
import LogoutBtn from "./LogoutBtn";
import Container from "../Container/Container";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  // Take the Status of the User if it is active or not (Logged IN or Logged OUT)
  const authStatus = useSelector((state) => state.auth.status);
  // authStatus = true (LogIn)
  // authStatus = false (LogOut)

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
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
  ];

  return (
    <header className="sticky top-2 z-50 flex justify-center items-center">
      <div className="sm:py-3 py-2 sm:px-6 px-3 shadow bg-black/40 sm:w-2/3 w-[90%] rounded-full backdrop-blur-md">
      <Container>
        <nav className="w-full flex justify-center items-center">
          <Link to="/">
            <Logo />
          </Link>

          <ul className="flex ml-auto items-center">
            {navItems.map((item) =>
              item.active ? (
                <li className="sm:m-4 m-0" key={item.name}>
                  <NavLink
                    to={item.slug}
                    className={`sm:px-6 sm:py-2 px-4 py-2 text-white text-md rounded-full ${
                      location.pathname === item.slug
                        ? "bg-red-600 font-semibold"
                        : " hover:bg-white/30"
                    }`}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
      </div>
    </header>
  );
}

export default Header;
