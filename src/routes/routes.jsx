import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AddUserPage from '../pages/AddUserPage'
import OfficesPage from '../pages/OfficesPage'



const Routes = () => {
    return (
        <ReactRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<AddUserPage />} />
            <Route path="/offices" element={<OfficesPage />} />
        </ReactRoutes>
    )
}

export default Routes;