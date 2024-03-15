import './bootstrap';
import '../css/app.css';
import Header from './Components/Header';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react'; // Make sure this import is only once
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component
import SignIn from './Pages/SignIn';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    const AppRoutes = () => (
      <Routes> {/* Wrap routes in a <Routes> element */}
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
          <AppRoutes /> {/* Render AppRoutes inside the Router */}
        </>
      </Router>
    );
  },
});
