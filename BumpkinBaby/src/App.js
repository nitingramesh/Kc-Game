import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Profile from "./pages/Profile";
import HeatRash from "./pages/HeatRash";
import DroolRash from "./pages/DroolRash";
import DiaperRash from "./pages/DiaperRash";
import BabyAcne from "./pages/BabyAcne";
import Chatroom from "./pages/Chatroom";
import Scanner from "./pages/Scanner";
import Homepage from "./pages/Homepage";
import RegisterStep2 from "./pages/RegisterStep2";
import RegisterStep1 from "./pages/RegisterStep1";
import LogIn from "./pages/LogIn";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/heat-rash":
        title = "";
        metaDescription = "";
        break;
      case "/drool-rash":
        title = "";
        metaDescription = "";
        break;
      case "/diaper-rash":
        title = "";
        metaDescription = "";
        break;
      case "/baby-acne":
        title = "";
        metaDescription = "";
        break;
      case "/chatroom":
        title = "";
        metaDescription = "";
        break;
      case "/scanner":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/registerstep2":
        title = "";
        metaDescription = "";
        break;
      case "/registerstep1":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Profile />} />

      <Route path="/heat-rash" element={<HeatRash />} />

      <Route path="/drool-rash" element={<DroolRash />} />

      <Route path="/diaper-rash" element={<DiaperRash />} />

      <Route path="/baby-acne" element={<BabyAcne />} />

      <Route path="/chatroom" element={<Chatroom />} />

      <Route path="/scanner" element={<Scanner />} />

      <Route path="/homepage" element={<Homepage />} />

      <Route path="/registerstep2" element={<RegisterStep2 />} />

      <Route path="/registerstep1" element={<RegisterStep1 />} />

      <Route path="/log-in" element={<LogIn />} />
    </Routes>
  );
}
export default App;
