import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Team from './components/Team.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'
import Testimonials from './components/Testimonials.jsx'
import './index.css'



function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Portfolio />
            <Team />
            <ContactForm />
            <Footer/>
            <Testimonials/>
        </div>
    );
}

export default App;
