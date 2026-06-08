// App.js
import { Routes, Route } from "react-router-dom"; // Router hataya yahan se
import Header from "../src/components/header.jsx"; 
// import Chatbot from "./components/Chatbot";
import HomePage from "./pages/homepage.js";
import Regitration from "./pages/registration.js"; 
import Service from "./pages/service.js";
import Aboutus from "./pages/aboutus.js";
import CoursePage from "./pages/coursepage.js";
import CountryPages from "./pages/CountryPages.js";
import CareerCounsellingPage from "./pages/CareerCounsellingPage.js";
import BlogPage from "./pages/BlogPage.js";
import Footer from "./components/footer.jsx";
import ComparisonChart from "./components/ComparisonChart.jsx";
import LegalPolicies from "./components/LegalPolicies.jsx";
import ServiceDetail from "./components/ServiceDetail.jsx";
import OurPartners from "./components/OurPartners.jsx";


// ... baki imports

function App() {
  return (
    <>
      <Header /> 
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<Regitration/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/about" element={<Aboutus/>}/>
          <Route path="/courses" element={<CoursePage/>}/>
          <Route path="/study-abroad/:countryName" element={<CountryPages />} />
          <Route path="/counselling-registration" element={<CareerCounsellingPage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/comparison-chart" element={<ComparisonChart/>}/>
          <Route path="legal-policies" element={<LegalPolicies/>}/>
          <Route path="/services/:serviceName" element={<ServiceDetail/>}/>
          <Route path="/ourpartners" element={<OurPartners/>}/>
        </Routes>
      </main>

      {/* <Chatbot /> */}
      <Footer/>
    </>
  );
}

export default App;