import "/src/global.css";
import imageHeader from "../../../assets/image/image-header.svg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Header() {
  return (
    <header>
      <nav className="bg-primary-light">
        <div className="content-container py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 ">
          <h2 className="text-3xl font-bold " >
            Web
            <span className="text-primary">Dev</span>
          </h2>
          <div className="flex gap-x-3">
            <a className="capitalize text-lg tracking-wide hover:text-blue-400 duration-300 " href="#">
              Home
            </a>
            <a className="capitalize text-lg tracking-wide hover:text-blue-400 duration-300 "  href="#">
              Skills
            </a>
            <a className="capitalize text-lg tracking-wide hover:text-blue-400 duration-300 "  href="#">
              Sobre
            </a>
            <a className="capitalize text-lg tracking-wide hover:text-blue-400 duration-300 "  href="#">
              Projetos
            </a>
          </div>
        </div>
      </nav>
      <div className="bg-primary-light py-24">
        <div className="content-container grid md:grid-cols-2 items-center gap-8">
          <article id="ArticleDescription">
            <h2 className="text-5xl font-bold tracking-wider">Eu sou João Vitor</h2>
            <p className="mt-4 text-3xl capitalize text-slate-700 tracking-wider">Desenvolvedor Front-End</p>
            <p className="mt-2 text-lg capitalize text-slate-700 tracking-wide">
              Transformando ideias em realidade interativa
            </p>

            <div className="flex gap-x-4 mt-4">
              <a 
                href="https://github.com/JoaoVitorRamos7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                className="h-8 w-8 text-slate-500 hover:black-300"
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                className="h-8 w-8 text-slate-500 hover:black-300"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                className="h-8 w-8 text-slate-500 hover:black-300"
                />
              </a>
            </div>
          </article>
          <article className="hidden md:block">
            <img
              className="h-80 lg:h-96"
              src={imageHeader}
              alt="Foto de João Vitor Ramos"
            />
          </article>
        </div>
      </div>
    </header>
  );
}
export default Header;
