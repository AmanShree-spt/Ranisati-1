import './App.css';
import HowItWorks from './components/HowItWorks.jsx';
import Contact from './components/Contact.jsx';
import InteriorDesign from './components/InteriorDesign.jsx';
import InteriorDesignHotel from './components/InteriorDesignHotel.jsx';
import InteriorDesignOffice from './components/InteriorDesignOffice.jsx';
import InteriorDesignRest from './components/InteriorDesignRest.jsx';
import InteriorDesignOthers from './components/InteriorDesignOthers.jsx';
import StartProject from './components/StartProject.jsx';
import Home from './components/Home.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {

  let tab = null

  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/howitworks" element={<HowItWorks />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/start-your-project" element={<StartProject />} />
      <Route path="/interior-design/" element={<InteriorDesign />} />
      <Route path="/interior-design/hotel" element={<InteriorDesignHotel />} />
      <Route path="/interior-design/office" element={<InteriorDesignOffice />} />
      <Route path="/interior-design/restaurant" element={<InteriorDesignRest />} />
      <Route path="/interior-design/others" element={<InteriorDesignOthers />} />
    </Routes>

  );
}

export default App;
