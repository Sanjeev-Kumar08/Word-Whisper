import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CheckAuth from './Components/CheckAuth.jsx'


// Pages
import Home from "./Pages/Home.jsx"
import AddPost from './Pages/AddPost.jsx'
import EditPost from './Pages/EditPost.jsx'
import Post from './Pages/Post.jsx'
import SignUpPage from './Pages/SignUpPage.jsx'
import LogInPage from './Pages/LogInPage.jsx'
import ALLPosts from './Pages/ALLPosts.jsx'


const router = createBrowserRouter([

  { 
    path : "/",
    element : <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/login",
        element: (
          <CheckAuth authentication = "false">
            <LogInPage/>
          </CheckAuth>
        )
      },
      {
          path: "/signup",
          element: (
            // <SignUpPage/>
          <CheckAuth authentication = "false">
            <SignUpPage/>
          </CheckAuth>
          )
      },
      {
        path: "/edit-post/:slug",
        element: (
          <CheckAuth authentication>
            <EditPost/>
          </CheckAuth>
        )
      },
      {
        path: "/add-post",
        element: (
          <CheckAuth authentication>
            <AddPost/>
          </CheckAuth>
        )
      },
      {
        path: "/all-posts",
        element: (
          <CheckAuth authentication>
            <ALLPosts/>
          </CheckAuth>
        )
      },
      {
        path: "/post/:slug",
        element: <Post/>
      },
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
