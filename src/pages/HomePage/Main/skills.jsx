import { FaHtml5, FaReact, FaCode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAngular, SiDotnet} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";



const tecnologias = [
    {
        name: "HTML5 & CSS3",
        Icon:<FaHtml5 className="h-16 w-16 text-primary" />,
        description: "Domínio em HTML e CSS para criar interfaces modernas, responsivas e bem estruturadas, priorizando uma experiência de usuário agradável e compatibilidade entre diferentes dispositivos."
    },
    {
        name: "JavaScript",
        Icon: <IoLogoJavascript className="h-16 w-16 text-primary" />,
        description: "Experiência no desenvolvimento de aplicações web dinâmicas e interativas utilizando JavaScript,implementando funcionalidades que tornam a navegação mais intuitiva e eficiente.",
    },
    {
        name: "React",
        Icon: <FaReact className="h-16 w-16 text-primary" />,
        description: "Desenvolvimento de interfaces modernas com React, utilizando componentes reutilizáveis, gerenciamento de estado e boas práticas para criar aplicações rápidas, escaláveis e de fácil manutenção."
    },
    {
        name: "Angular",
        Icon: <SiAngular className="h-16 w-16 text-primary" />,
        description: "Desenvolvimento de aplicações web modernas utilizando Angular, criando interfaces escaláveis, componentes reutilizáveis e aplicações com boa organização de código."
    },
    {
        name: "C#",
        Icon: <TbBrandCSharp className="h-16 w-16 text-primary" />,
        description: "Experiência com C# para desenvolvimento de aplicações robustas, utilizando orientação a objetos, boas práticas de programação e construção de soluções eficientes."
    },
    {
        name: "ASP.NET Core",
        Icon: <SiDotnet className="h-16 w-16 text-primary" />,
        description: "Desenvolvimento de APIs e aplicações backend utilizando ASP.NET Core, criando serviços rápidos, seguros e escaláveis integrados com diferentes bancos de dados."
    },
    {
        name: "Entity Framework Core",
        Icon: <FaCode className="h-16 w-16 text-primary" />,
        description: "Utilização do Entity Framework Core para mapeamento objeto-relacional (ORM), facilitando a comunicação entre aplicações .NET e bancos de dados."
    },
    {
        name: "SQL Server",
        Icon: <FaDatabase  className="h-16 w-16 text-primary" />,
        description: "Conhecimento em bancos de dados relacionais utilizando SQL Server, realizando criação de tabelas, consultas, relacionamentos e otimização de dados."
    },
 
    
    
];

function Skills(){
    return(
        <div>
            <div className="md:hidden ">
            {tecnologias.map((tech) =>(
                    <article key={tech.name}>
                        <details>
                            <summary className="text-2xl  p-2" >
                                {tech.name}
                            </summary>
                            <p className=" pl-9  text-gray">
                                {tech.description}
                            </p>
                        </details>
                    </article>
             ))}
            </div>

            <div className="hidden py-16 gap-8 md:grid md:grid-cols-2 lg:grid-cols-4">
                {tecnologias.map((tech) => (
                    <article key={tech.name}>
                        <span className="h-16 w-16 text-primary">
                            {tech.Icon}
                        </span>
                        <h4 className="mt-6 font-bold">
                            {tech.name}
                        </h4>
                        <p className="mt-2 text-gray">
                            {tech.description}
                        </p>
                    </article>
                ))}
            </div>
        </div>


            
    );
}
export default Skills;