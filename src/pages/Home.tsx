import { MdEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router";

const Home = () => {
  return (
    <section className="bg-cover bg-center bg-[url('https://res.cloudinary.com/dhdxq3mkm/image/upload/v1744295194/images/ChatGPT_Image_10_abr_2025_09_26_08_a.m._q6yyua.png')]">
      <div className="max-w-screen min-h-screen flex items-center justify-center bg-zinc-700/25">
        <div className="max-w-2xl mx-auto flex flex-col items-center px-4 md:px-0">
          <h1 className="text-white text-center text-5xl"> Jhon Ñ. Molina</h1>
          <p className="text-white text-center mt-5 text-lg">
            Soy desarrollador Full-Stack con enfoque en TypeScript. Me apasiona
            crear soluciones web modernas con NestJS, React, Vue y Angular. Me
            considero autodidacta, curioso y siempre motivado por aprender y
            enfrentar nuevos retos.
          </p>
          <aside className="mt-5 flex flex-col flex-wrap justify-center items-center gap-2">
            <div className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 flex items-center gap-2 shadow-md">
              <MdEmail className="w-6 h-6" />
              <span className="ml-2 font-medium text-base">
                jmolina2624@gmail.com
              </span>
            </div>
            <div className="flex flex-wrap mt-2 gap-3">
              <a
                href="/JhonMolina-CV.pdf"
                target="_blank"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 flex items-center gap-2 shadow-md"
              >
                <IoDocumentText className="w-6 h-6" /> Descargar CV
              </a>
              <Link
                to="/projects"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 flex items-center gap-2 shadow-md"
              >
                <FaRocket /> Ver Proyectos
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Home;
