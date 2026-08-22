import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Bespoke from './pages/Bespoke';
import Craftsmanship from './pages/Craftsmanship';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'collections', element: <Collections /> },
      { path: 'bespoke', element: <Bespoke /> },
      { path: 'craftsmanship', element: <Craftsmanship /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> }, // catch-all: any unknown URL → 404 page
    ],
  },
]);