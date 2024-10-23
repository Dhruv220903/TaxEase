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
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
