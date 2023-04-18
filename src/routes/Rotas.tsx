import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Agendamentos } from '../pages/Agendamentos';

export function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/agendamentos' element={<Agendamentos />} />
        </Routes>
    )
}