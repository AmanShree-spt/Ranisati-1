import './App.css';
import HowItWorks from './components/HowItWorks.jsx';
import Contact from './components/Contact.jsx';
import InteriorDesign from './components/InteriorDesign.jsx';
import StartProject from './components/StartProject.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <Routes>
      <Route path="/howitworks" element={<HowItWorks />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/start-your-project" element={<StartProject />} />
      <Route path="/interior-design" element={<InteriorDesign />} />

    </Routes>

  );
}

export default App;
