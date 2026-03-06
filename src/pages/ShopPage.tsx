import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Shop from '../components/Shop';
import { motion } from 'motion/react';

export default function ShopPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Shop />
    </motion.div>
  );
}
