import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AddUserPage from '../pages/AddUserPage'
import OfficesPage from '../pages/OfficesPage'
import CalendarPage from '../pages/CalendarPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import UserBookingsPage from '../pages/UserBookingsPage'
import HistoryPage from '../pages/HistoryPage'


const Routes = () => {
    return (
        <ReactRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<AddUserPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/offices/:date" element={<OfficesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegisterPage />} />
            <Route path="/bookings/user/:userId" element={<HistoryPage />} />
        </ReactRoutes>
    )
}

export default Routes;