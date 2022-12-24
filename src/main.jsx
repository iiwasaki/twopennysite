import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"

/* Pages */
import App from './App'
import ErrorPage from './components/ErrorPage'
import Contact from './components/Contact'
import MainRoot from './components/MainRoot'
import About from './components/About'
import Portraits from './components/Portraits'
import Characters from './components/Characters'
import Ghosted from './components/Ghosted'
import Misc from './components/Misc'
import Commissions from "./components/Commissions"


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<App />}
        errorElement={<ErrorPage />}
      >
      </Route>
      <Route
        element={<MainRoot/>}
        errorElement={<ErrorPage/>}
      >
        <Route
          path="commissions"
          element={<Commissions />}
        >
        </Route>
        <Route
          path="contact"
          element={<Contact />}
        >
        </Route>
        <Route
          path="about"
          element={<About />}
        >
        </Route>
        <Route
          path="portraits"
          element={<Portraits />}
        >
        </Route>
        <Route
          path="characters"
          element={<Characters/>}
        >
        </Route>
        <Route
          path="ghosted"
          element={<Ghosted/>}
        >
        </Route>
        <Route
          path="misc"
          element={<Misc/>}
        >
        </Route>
      </Route> {/* End Main Root */}
    </>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
