import { motion } from 'framer-motion';
import { PageTransition } from 'next-page-transitions';


const transitionStyles = {
  enter: {
    opacity: 0,
  },
  enterActive: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Layout = ({ children }) => (
  <PageTransition
    timeout={500}
    classNames="page-transition"
    monkeyPatchScrolling
    loadingDelay={500}
    loadingTimeout={{
      enter: 500,
      exit: 500,
    }}
    loadingClassNames="loading-indicator"
  >
    <motion.div
      initial="enter"
      animate="enterActive"
      exit="exit"
      variants={transitionStyles}
    >
      {children}
    </motion.div>
  </PageTransition>
);

export default Layout;