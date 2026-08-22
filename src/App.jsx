import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SOS from "./pages/SOS";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Children from "./pages/Children";
import MentalHealth from "./pages/MentalHealth";
import Complaint from "./pages/Complaint";
import ComplaintStatus from "./pages/ComplaintStatus";
import NearbyHelp from "./pages/NearbyHelp";
import TrustedContacts from "./pages/TrustedContacts";
import Helplines from "./pages/Helplines";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/children" element={<Children />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/complaint-status" element={<ComplaintStatus />} />
        <Route path="/nearby" element={<NearbyHelp />} />
        <Route path="/contacts" element={<TrustedContacts />} />
        <Route path="/helplines" element={<Helplines />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;