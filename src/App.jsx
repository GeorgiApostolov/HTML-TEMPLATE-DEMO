import BigFeaturesLeft from "./components/BigFeaturesLeft.jsx";
import BigFeaturesRight from "./components/BigFeaturesRight.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import CounterParallax from "./components/CounterParallax.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import HomeParallax from "./components/HomeParallax.jsx";
import Preloader from "./components/Preloader.jsx";
import PricingPlans from "./components/PricingPlans.jsx";
import Testimonials from "./components/Testimonials.jsx";
import WelcomeArea from "./components/WelcomeArea.jsx";

function App() {
  return (
    <>
      &lt;&gt;
      {/* ***** Preloader Start ***** */}
      <Preloader />
      {/* ***** Preloader End ***** */}
      {/* ***** Header Area Start ***** */}
      <Header />
      {/* ***** Header Area End ***** */}
      {/* ***** Welcome Area Start ***** */}
      <WelcomeArea />
      {/* ***** Welcome Area End ***** */}
      {/* ***** Features Small Start ***** */}
      <Features />
      {/* ***** Features Small End ***** */}
      {/* ***** Features Big Item Start ***** */}
      <BigFeaturesLeft />
      {/* ***** Features Big Item End ***** */}
      {/* ***** Features Big Item Start ***** */}
      <BigFeaturesRight />
      {/* ***** Features Big Item End ***** */}
      {/* ***** Home Parallax Start ***** */}
      <HomeParallax />
      {/* ***** Home Parallax End ***** */}
      {/* ***** Testimonials Start ***** */}
      <Testimonials />
      {/* ***** Testimonials End ***** */}
      {/* ***** Pricing Plans Start ***** */}
      <PricingPlans />
      {/* ***** Pricing Plans End ***** */}
      {/* ***** Counter Parallax Start ***** */}
      <CounterParallax />
      {/* ***** Counter Parallax End ***** */}
      {/* ***** Blog Start ***** */}
      <Blog />
      {/* ***** Blog End ***** */}
      {/* ***** Contact Us Start ***** */}
      <Contact />
      {/* ***** Contact Us End ***** */}
      {/* ***** Footer Start ***** */}
      <Footer />
    </>
  );
}

export default App;
