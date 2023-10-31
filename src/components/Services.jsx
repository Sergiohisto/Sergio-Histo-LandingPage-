import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = () => [
  {
    name: "UI/UX desrrollador",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium unde adipisci corporis, eaque commodi libero laborum aliquam animi non repellat quibusdam repudiandae quod soluta distinctio alias voluptates. Necessitatibus, ad itaque.",
    link: "Leer mas",
  },
  {
    name: "UI/UX desrrollador",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium unde adipisci corporis, eaque commodi libero laborum aliquam animi non repellat quibusdam repudiandae quod soluta distinctio alias voluptates. Necessitatibus, ad itaque.",
    link: "Leer mas",
  },
  {
    name: "UI/UX desrrollador",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium unde adipisci corporis, eaque commodi libero laborum aliquam animi non repellat quibusdam repudiandae quod soluta distinctio alias voluptates. Necessitatibus, ad itaque.",
    link: "Leer mas",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">Yo soy programador e historiador</h3>
            <button className="btn btn-sm">Mira mi trabajo</button>
          </div>
          <div>
            <div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
