import './bootstrap';
import '../css/app.css';
import Header from './Components/Header';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    const AppRoutes = () => (
      <Routes>
        <Route exact path="/" element={<App {...props} />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    );

    createRoot(el).render(
      <Router>
        <>
          <Header />
          <AppRoutes /> 
        </>
      </Router>
    );
  },
});
