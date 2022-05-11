
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Content } from './components/Content'
import { HeroeVehicles } from './components/HeroeVehicles/HeroeVehicles'
import { ErrorPage } from './components/ErrorPage/ErrorPage'



function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navigate to='/people?page=1' replace />} />

          <Route path="/people" element={<Content />} />
          <Route path="/people/:id" element={<HeroeVehicles />} />
          <Route path="*" element={<ErrorPage />} />



        </Routes>

      </BrowserRouter>

    </>




  );
}

export default App;
