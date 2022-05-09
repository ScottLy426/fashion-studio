import { useRef, useState, useEffect } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";

import { ThemeProvider } from "styled-components";

import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";

import Home from "./sections/Home";
import About from "./sections/About";
import Shop from "./sections/Shop";
import Banner from "./sections/Banner";
import NewArrivals from "./sections/NewArrivals";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";

function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{!loaded && <Loader />}</AnimatePresence>

          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="app" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Shop />
              <Banner />
              <NewArrivals />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
