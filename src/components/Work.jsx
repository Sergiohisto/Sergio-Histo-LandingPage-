import React from "react";

import img1 from "../assets/portafolio1.png";
import img2 from "../assets/portafolio2.png";
import img3 from "../assets/portafolio3.png";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10">
            {/*text*/}
            <div>
              <h2 className="h2 leading-tight text-accent">
                Mis Creaciones <br />
                Mis trabajos.
              </h2>
              <p className="max-w-sm mb-10">
                Estoy interesado y entusiasmado en aprender y crear proyectos
                Front-End con las mejores y recientes tecnologías. LandingPages
                programadas con React y Nextjs. Pero el lenguaje de programación
                no es la única de mis pasiones también me encanta el lenguaje
                literario, por eso comparto una de mis reseñas literarias.
              </p>
              <button className="btn btn-sm ">Ver más proyectos.</button>
            </div>
            {/*imge*/}
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay*/}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*imge*/}
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />
              {/*subtitulo*/}
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">SERGIO HISTO</span>
              </div>
              {/*titulo*/}
              <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Reseña literaria</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-10">
            {/*img*/}
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay*/}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*imge*/}
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt=""
              />
              {/*subtitulo*/}
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/*titulo*/}
              <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Proyecto app Ley</span>
              </div>
            </div>
            {/*img*/}
            <div className=" group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay*/}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/*imge*/}
              <img
                className=" group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt=""
              />
              {/*subtitulo*/}
              <div className=" absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/*titulo*/}
              <div className=" absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">App Prisma Tasks </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
