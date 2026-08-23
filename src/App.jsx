import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SOS from "./pages/SOS";

import Women from "./pages/Women";
import WomenSafety from "./pages/WomenSafety";
import WomenDomesticViolence from "./pages/WomenDomesticViolence";
import WomenNGOs from "./pages/WomenNGOs";

import Men from "./pages/Men";
import MenMentalHealth from "./pages/MenMentalHealth";
import MenAbuseHelp from "./pages/MenAbuseHelp";
import MenLegalSupport from "./pages/MenLegalSupport";
import MenHarassment from "./pages/MenHarassment";
import MenNGOs from "./pages/MenNGOs";

import Children from "./pages/Children";
import ChildRights from "./pages/ChildRights";
import MissingChild from "./pages/MissingChild";
import ChildAbuse from "./pages/ChildAbuse";
import ChildNGOs from "./pages/ChildNGOs";

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

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* SOS */}
        <Route path="/sos" element={<SOS />} />


        {/* Women */}

        <Route path="/women" element={<Women />} />

        <Route
          path="/women/safety-tips"
          element={<WomenSafety />}
        />

        <Route
          path="/women/domestic-violence"
          element={<WomenDomesticViolence />}
        />

        <Route
          path="/women/ngos"
          element={<WomenNGOs />}
        />


        {/* Men */}

        <Route path="/men" element={<Men />} />

        <Route
          path="/men/mental-health"
          element={<MenMentalHealth />}
        />

        <Route
          path="/men/abuse-help"
          element={<MenAbuseHelp />}
        />

        <Route
          path="/men/legal-support"
          element={<MenLegalSupport />}
        />

        <Route
          path="/men/harassment"
          element={<MenHarassment />}
        />

        <Route
          path="/men/ngos"
          element={<MenNGOs />}
        />


        {/* Children */}

        <Route
          path="/children"
          element={<Children />}
        />

        <Route
          path="/child-rights"
          element={<ChildRights />}
        />

        <Route
          path="/missing-child"
          element={<MissingChild />}
        />

        <Route
          path="/child-abuse"
          element={<ChildAbuse />}
        />

        <Route
          path="/child-ngos"
          element={<ChildNGOs />}
        />


        {/* Mental Health */}

        <Route
          path="/mental-health"
          element={<MentalHealth />}
        />


        {/* Complaints */}

        <Route
          path="/complaint"
          element={<Complaint />}
        />

        <Route
          path="/complaint-status"
          element={<ComplaintStatus />}
        />


        {/* Help */}

        <Route
          path="/nearby"
          element={<NearbyHelp />}
        />

        <Route
          path="/contacts"
          element={<TrustedContacts />}
        />

        <Route
          path="/helplines"
          element={<Helplines />}
        />


        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;