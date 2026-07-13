import "./index.css";
import imageHeader from "../../../assets/image/image-header.svg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Header() {
  return (
    <header>
      <nav>
        <div id="navContainer">
          <h2 id="logo">
            Web
            <span id="DevLogo">Dev</span>
          </h2>
          <div id="containerNavLinks">
            <a className="navLink" href="#">
              Home
            </a>
            <a className="navLink" href="#">
              Skills
            </a>
            <a className="navLink" href="#">
              Sobre
            </a>
            <a className="navLink" href="#">
              Projetos
            </a>
          </div>
        </div>
      </nav>
      <div id="headerContent">
        <div id="headerContainer">
          <article id="ArticleDescription">
            <h2 id="headerTitle">Eu sou João Vitor</h2>
            <p id="headerSubtitle">Desenvolvedor Front-End</p>
            <p id="headerDescription">Transformando ideias em realidade interativa</p>

            <div id="containerSocialMedia">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </article>
          <article id="ArticleImage">
            <img id="imageHeader"
              src= {imageHeader}
              alt="Foto de João Vitor Ramos"
            />
          </article>
        </div>
      </div>
    </header>
  );
}
export default Header;
