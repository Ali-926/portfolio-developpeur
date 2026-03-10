import "./Skills.css";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { SiExpress, SiMongodb } from "react-icons/si";

function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="skills-container">
        <h2 className="section-title">Compétences</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <FaHtml5 />
            <span>HTML</span>
          </div>

          <div className="skill-card">
            <FaCss3Alt />
            <span>CSS</span>
          </div>

          <div className="skill-card">
            <FaJs />
            <span>JavaScript</span>
          </div>

          <div className="skill-card">
            <FaReact />
            <span>React</span>
          </div>

          <div className="skill-card">
            <FaNodeJs />
            <span>Node.js</span>
          </div>

          <div className="skill-card">
            <SiExpress />
            <span>Express</span>
          </div>

          <div className="skill-card">
            <SiMongodb />
            <span>MongoDB</span>
          </div>

          <div className="skill-card">
            <FaGitAlt />
            <span>Git</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
