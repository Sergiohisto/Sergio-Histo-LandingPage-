import React from "react";
import Image from "../assets/SERGIO.png";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-primary text-[55px] font-bold leading-[1] lg:text-[110px]"
            >
              SERGIO <span>HISTO</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-primary mr-4">Yo soy</span>
              <TypeAnimation
                sequence={[
                  "desarrollador",
                  2000,
                  "creador",
                  2000,
                  "historiador",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-primary"
            >
              Historiador · Ingeniero de software júnior · Desarrollador de
              JavaScript · React Developer
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg hover:text-primary">
                Escribeme
              </button>
              <a href="#" className=" text-gradient btn-link">
                Mi portafolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
            >
              <a
                href="https://www.linkedin.com/in/sergio-luis-arrieta-rodr%C3%ADguez-3a670b234/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Sergiohisto" target="_blank">
                <FaGithub />
              </a>
              <a
                className=""
                href="https://twitter.com/sergiohisto"
                target="_blank"
              >
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className=" hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
