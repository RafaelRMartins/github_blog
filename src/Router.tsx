import { Routes, Route } from 'react-router-dom'
import { HomeSearch } from './pages/HomeSearch'
import { Details } from './pages/Details'

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<HomeSearch />} />
        <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}
