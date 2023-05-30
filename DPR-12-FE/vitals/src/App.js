
import './App.css'
import Dashboard from './components/patient-pages/Dashboard'
import { Route, Routes } from 'react-router-dom';
import AccessPatients from './components/patient-pages/AccessPatients/AccessPatients';



function App() {
  return (
    <>    
      <div>

{/* -------------PATIENT'S ROUTES ----------------------- */}

        <Routes>

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/accesspatients' element= {<AccessPatients />} />
        </Routes>


{/* -----------------DOCTOR'S ROUTES ----------------------- */}


      </div>
    </>
  );
}

export default App;
