import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Collections from './pages/Collections';
import Bespoke from './pages/Bespoke';
import Craftsmanship from './pages/Craftsmanship';
import About from './pages/About';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'collections', element: <Collections /> },
      { path: 'bespoke', element: <Bespoke /> },
      { path: 'craftsmanship', element: <Craftsmanship /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);