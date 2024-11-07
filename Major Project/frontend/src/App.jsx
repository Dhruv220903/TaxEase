// src/App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import IncomeSources from './components/IncomeSources';
import TaxSavings from './components/TaxSavings';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import IncomeTaxCalculator from './components/IncomeTaxCalculator';
import TaxSummary from './components/TaxSummary';
import Login from './components/Login';
import TaxFAQ from './components/Faq';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import TermsOfService from './components/TermsofService';
import Blog from './components/Blog';
import TaxGuide from './components/TaxGuide';
import Chatbot from './components/Chatbot';

function Layout({ children }) {
    const location = useLocation();
    const hideHeaderFooter = location.pathname === '/login';

    return (
        <>
            {!hideHeaderFooter && <Header />}
            {children}
            {!hideHeaderFooter && <Footer />}
        </>
    );
}

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/income-sources" element={<IncomeSources />} />
                    <Route path="/tax-savings" element={<TaxSavings />} />
                    <Route path="/filetaxes" element={<PersonalInfo />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="/taxcalculator" element={<IncomeTaxCalculator />} />
                    <Route path="/tax-summary" element={<TaxSummary />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/faq" element={<TaxFAQ />} />
                    <Route path="/privacypolicy" element={< PrivacyPolicy/>} />
                    <Route path="/contactus" element={< ContactUs/>} />
                    <Route path="/termsofservice" element={< TermsOfService/>} />
                    <Route path="/taxguide" element={< TaxGuide/>} />
                    <Route path="/blog" element={< Blog/>} />
                   


                </Routes>
                
            </Layout>
        </Router>
    );
}

export default App;
