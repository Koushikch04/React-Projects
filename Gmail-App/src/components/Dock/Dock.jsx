import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Dock.css";

const Dock = () => {
  const mouseX = useMotionValue(Infinity);
  const handleMouseMove = (e) => {
    mouseX.set(e.pageX);
  };
  const handleMouseLeave = () => {
    mouseX.set(Infinity);
  };
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="dock-container"
    >
      {[...Array(3).keys()].map((i) => (
        <AppIcon mouseX={mouseX} key={i} />
      ))}
    </motion.div>
  );
};

function AppIcon({ mouseX }) {
  const ref = useRef(null);
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() || { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  return (
    <motion.div ref={ref} style={{ width }} className="app-icon"></motion.div>
  );
}
export default Dock;
