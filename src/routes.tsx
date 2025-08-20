import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

export const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
    </Routes>
)

export default Rotas
