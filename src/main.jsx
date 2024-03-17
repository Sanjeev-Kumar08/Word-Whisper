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

// Sample
import One from './SampleComponent/One.jsx'
import SampleWrapper from './SampleComponent/SampleWrapper.jsx'


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
          // <LogInPage/>
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
          // <EditPost/>
          <CheckAuth authentication>
            <EditPost/>
          </CheckAuth>
        )
      },
      {
        path: "/add-post",
        element: (
          // <AddPost/>
          <CheckAuth authentication>
            <AddPost/>
          </CheckAuth>
        )
      },
      {
        path: "/all-posts",
        element: (
          // <ALLPosts/>
          <CheckAuth authentication>
            <ALLPosts/>
          </CheckAuth>
        )
      },
      {
        path: "/post/:slug",
        element: <Post/>
      },
      {
        path : "sample",
        element: (
          <SampleWrapper>
            hey
          </SampleWrapper>
        )
      },
      {
        path: "one",
        element : <CheckAuth authentication = "false">
          <One/>
        </CheckAuth>
      }
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
