import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { HomePage } from './pages/HomePage/HomePage'
import { DetailPost } from './pages/DetailPost/DetailPost'

export const App = () => {
  return (
    <> 
      <Routes>
        <Route element={<Home />} path='/'/>
      </Routes>
      <Routes>
        <Route element={<HomePage />} path='/home'/>
        <Route element={<DetailPost />} path='/post/:id'/>
      </Routes>
    </>
  )
}
