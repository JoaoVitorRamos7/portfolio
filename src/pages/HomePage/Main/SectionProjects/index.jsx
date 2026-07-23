import ImageSistemaBibliotecario from "../../../../assets/image/image-projects/sistema-bibliotecario.png"
import ImageEmBreveDisponivelCinza from "../../../../assets/image/image-projects/embreve-disponivelCinza.png"
import { FaGithub } from "react-icons/fa";

function SectionProjects() {
    return (
        <section id="Projects" className="content-container pt-20 ">
            <div className="border-b border-gray-200 pb-5">
                <h2 className="text-3xl font-medium tracking-wide capitalize">Projetos</h2>
            </div>
            <div className=" grid py-16 gap-8 lg:grid-cols-2">
                <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
                    <img className="w-full h-64 object-cover rounded-t-lg"
                        src={ImageSistemaBibliotecario}
                        alt="Sistema Bibliotecário"
                    />
                    <div className="capitalize p-8">
                        <h2 className="text-xl font-medium tracking-wide">
                            Sistema Bibliotecário
                        </h2>
                        <p className="mt-4 text-gray leading-loose">
                            API REST desenvolvida com C# e ASP.NET Core para gerenciamento de uma biblioteca. O projeto implementa operações CRUD, relacionamentos entre entidades utilizando Entity Framework Core, Repository Pattern e Injeção de Dependência. O objetivo é aplicar boas práticas de desenvolvimento back-end, arquitetura em camadas e persistência de dados em um cenário próximo ao utilizado em aplicações comerciais.
                        </p>
                        <div className="mt-4 flex gap-x-4">
                            <a href="https://github.com/JoaoVitorRamos7/sistema-blibiotecario-api" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="h-8 w-8 text-slate-500 :hover-text-black duration-300" />
                            </a>
                        </div>
                    </div>
                </article >
                <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
                    <img className="w-full h-64 object-cover rounded-t-lg"
                        src={ImageEmBreveDisponivelCinza}
                        alt="Em breve Disponivel"
                    />
                    <div className="capitalize p-8">
                        <h2 className="text-xl font-medium tracking-wide">
                            Code Library
                        </h2>
                        <p className="mt-4 text-gray leading-loose">
                            Projeto desenvolvido em React com foco na criação de uma interface moderna, responsiva e intuitiva. Durante o desenvolvimento, foram aplicados conceitos de componentização, reutilização de código e boas práticas de organização do projeto, proporcionando uma experiência fluida e uma base escalável para futuras evoluções.
                        </p>
                        <div className="mt-4 flex gap-x-4">
                            <a >
                                <FaGithub className="h-8 w-8 text-slate-500 :hover-text-black duration-300" />
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default SectionProjects;