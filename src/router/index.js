import React, { Suspense } from 'react'
import {
  useRoutes
} from 'react-router-dom'
import Layout from '@/layout/Layout'
const Home = React.lazy(() => import('@/pages/home/home'))
const Login = React.lazy(() => import('@/pages/login/login'))
const lazyLoad = (child) => {
  return <Suspense fallback={<h1>Loading...</h1>}>
    {child}
  </Suspense>
}
const GetRoutes = () => {
  const routes = useRoutes(
    [
      {
        path: '/',
        element: <Layout/>,
        children: [
          {
            index: true,
            element: lazyLoad(<Home/>)
          }
        ]
      },
      {
        path: '/login',
        exact: true,
        element: lazyLoad(<Login/>)
      }
    ]
  )
  return routes
}
export default GetRoutes