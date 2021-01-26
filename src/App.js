import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import { Home } from "./Home";
import { ProblemList } from "./ProblemList";

export default function App() {
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [0, 40], [1, 0.6]);
  const hY = useTransform(scrollY, [0, 40], [0, -30]);
  const paraY = useTransform(
    scrollY,
    [0, window.document.body.offsetHeight],
    [-1000, 1000]
  );
  return (
    <motion.div className="App grid">
      <motion.div style={{ y: 0, x: 0 }}>
        <motion.header style={{ y: hY }}>
          <motion.div style={{ scale: y, originY: 1, originX: 0 }}>
            <motion.h3>Ken Spry</motion.h3>
          </motion.div>
        </motion.header>
        <motion.div className="image" style={{ y: 300 + paraY }} />
        <motion.div className="image" style={{ y: 500 + paraY }} />
        <motion.div className="image" style={{ y: 1000 + paraY }} />
        <motion.div className="image" style={{ y: 500 + paraY }} />
        <motion.div className="image" style={{ y: 1200 + paraY }} />
        <main className="main main-text">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/problemlist">
              <ProblemList />
            </Route>
          </Switch>
        </main>
        <footer>
          <div>Ken Spry</div>
          <div>Indianapolis, IN</div>
          <div>For more, contact me at kenneth.spry1@gmail.com</div>
        </footer>
      </motion.div>
    </motion.div>
  );
}
