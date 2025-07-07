import { Routes, Route } from 'react-router-dom'
import HomePage from '../features/lunch/pages/HomePage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}