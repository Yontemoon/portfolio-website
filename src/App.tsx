import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HeaderLayout from './HeaderLayout'
import './App.css'
import HomePage from './components/HomePage'
import ServicePage from './components/ServicePage'
import AboutMePage from './components/AboutMePage'
import MyWorkPage from './components/MyWorkPage'

const App = () => {

  const router = createBrowserRouter([
    {
      element: <HeaderLayout/>,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/my-services",
          element: <ServicePage/>
        },
        {
          path: "/about-me",
          element: <AboutMePage/>
        },
        {
          path: "/my-work",
          element: <MyWorkPage/>
        }
      ]
    }
  ])
 
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
