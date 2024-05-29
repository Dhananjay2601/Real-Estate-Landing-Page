import { motion } from "framer-motion";

const OnHover = ({ children }) => {
  return (
    <motion.div
      style={{ height: "100%" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

export default OnHover;
