import { RouterProvider } from 'react-router';
import { MotionConfig } from 'motion/react';
import { router } from './routes';
import '../styles/index.css';

function App() {
  // reducedMotion="user" → every motion.* component across the app automatically
  // drops slide/fade entrance animations when the visitor's OS "reduce motion"
  // accessibility setting is on. Everyone else sees the site exactly as before.
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  );
}

export default App;