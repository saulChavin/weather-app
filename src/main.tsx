import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CurrentWeather } from './components/CurrentWeather';
import { SearchView } from './view/SearchView';
import { SettingsView } from './view/SettingsView';

const router = createBrowserRouter([
  {
    element: <Root />,
    path: '/',
    children: [
      {
        path: '/home',
        element: <CurrentWeather />
      },
      {
        path: '/search',
        element: <SearchView />
      },
      {
        path: '/settings',
        element: <SettingsView />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
