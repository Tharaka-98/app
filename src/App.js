import React, { Suspense, useEfffect, useState, lazy} from 'react';

//Libraries
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

// Context
import GlobalContext from './Context/Context';

//Home
const CreativeAgencyPage = lazy(() => import("./Pages/Home/CreativeAgencyPage"))




function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customModal, setCutomModal] = useState({
    el: null,
    isOpen: false
  })

  return (
    <GlobalContext.Provider
    value={{
      headerHeight,
      setHeaderHeight,
      footerHeight,
      setFooterHeight,
      isModalOpen,
      setIsModalOpen,
      customModal,
      setCutomModal
    }}
    >
      <div className="App" style={{ "--header-height": `${headerHeight}px` }}> 
        {
          <AnimatePresence mode="wait">
            <Suspense fallback={<></>}>
            <Routes>
              {/* Home Specialized */}
              <Route path="/home-creative-agency" element={<CreativeAgencyPage style={{ "--base-color": "#cc754c" }} />} />
            </Routes>
            </Suspense>
          </AnimatePresence>
        }
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
