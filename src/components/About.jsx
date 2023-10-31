import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-20 lg:gap-y-0 h-screen">
          {/*Imagen*/}
          <div className="flex-1 bg-sergio bg-contain bg-no-repeat h-[520px] bg-top rounded-lg"></div>
          {/*texto*/}
          <div className="flex-1">
            <h2 className="h2 text-accent ">Sobre mi.</h2>
            <h3 className="h3 mb-4 text-primary">
              Yo soy Front-end Developer e  historiador.
            </h3>
            {/*staf*/}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={10} /> : null}
                </div>
                <div className=" font-primary text-sm tracking-[2px]">
                  Años de <br />
                  Experiencia
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}K+
                </div>
                <div className=" font-primary text-sm tracking-[2px]">
                  Número <br />
                  Expectativa
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className=" font-primary text-sm tracking-[2px]">
                  Proyectos <br />
                  en Proceso
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-8 items-center">
            <button className="btn btn-lg">Escribeme</button>
            <a href="#" className="text-gradient btn-link ¡">
              Mi portafolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
