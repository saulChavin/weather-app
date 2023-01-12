import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchView from './view/SearchView';
import SettingsView from './view/SettingsView';
import CountryWeather from './view/CountryWeather';
import HomeView from './view/HomeView';

const router = createBrowserRouter([
  {
    element: <Root />,
    path: '/',
    children: [
      {
        path: '/',
        index: true,
        element: <HomeView />
      },
      {
        path: '/search',
        element: <SearchView />,
      },
      {
        path: '/country/:name',
        element: <CountryWeather />
      },
      {
        path: '/settings',
        element: <SettingsView />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
)
