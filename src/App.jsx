import { useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { initRevealAnimation, watchForNewRevealElements, destroyRevealAnimation, refreshRevealAnimation } from "../utils/scrollAnimation.js";import Home from '../pages/Home/Home.jsx';
import MainLayout from "../layout/MainLayout";


function App() {
 const location = useLocation();
 
  useEffect(() => {
    initRevealAnimation({
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
      once: true
    });
    
    watchForNewRevealElements();
    
    return () => {
      destroyRevealAnimation();
    };
  }, []); 

  useEffect(() => {
    refreshRevealAnimation();
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
