import BigFeatures from "./components/BigFeatures.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import CounterParallax from "./components/CounterParallax.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import WorkProcessSection from "./components/WorkProcessSection.jsx";
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
      <BigFeatures
        title="Let’s discuss about you project"
        content="Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue
                blandit, at finibus leo efficitur. Nam gravida purus non sapien
                auctor, ut aliquam magna ullamcorper."
      />
      {/* ***** Features Big Item End ***** */}
      {/* ***** Features Big Item Start ***** */}
      <BigFeatures
        title="We can help you to grow your business"
        content="Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis
                nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor
                luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis
                dolor elit."
        reverse
      />
      {/* ***** Features Big Item End ***** */}
      {/* ***** Home Parallax Start ***** */}
      <WorkProcessSection />
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
