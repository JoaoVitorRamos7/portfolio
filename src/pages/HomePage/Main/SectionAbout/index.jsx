import imageSectionAbout from "../../../../assets/image/image-joao/joao2.jpg"

function SectionAbout(){
    return(
        <section className="py-5" id="About">
            <h3 className=" flex justify-center text-3xl md:text-4xl font-medium tracking-wider pb-15">Sobre Mim</h3>
            <div className="content-container grid md:grid-cols-2  gap-10"> 
                <div className="grid justify-center items-center">
                    <img className=" w-[240px] h-[320px] shadow-xl md:shadow-2xl rounded-3xl lg:h-[500px] lg:w-[375px]"
                        src={imageSectionAbout}
                        alt="Foto de João Vitor Ramos"

                    />
                </div>
                <article>
                    <p  className=" lg:text-2xl  text-gray pb-7">
                        Sou Desenvolvedor Front-end apaixonado por criar interfaces modernas, responsivas e intuitivas, sempre buscando oferecer a melhor experiência ao usuário. Trabalho principalmente com React, JavaScript, HTML e CSS, desenvolvendo aplicações escaláveis, organizadas e seguindo boas práticas de desenvolvimento. 
                    </p>
                    <p className=" lg:text-2xl text-gray pb-7">
                        Além da minha atuação no Front-end, possuo conhecimentos em tecnologias de Back-end como C#, ASP.NET Core, Entity Framework Core e SQL Server, o que me permite compreender o funcionamento completo de uma aplicação e colaborar de forma integrada entre cliente e servidor.
                    </p>
                    <p className=" lg:text-2xl text-gray">
                        Também venho ampliando meus conhecimentos em Angular, explorando seu ecossistema para desenvolver interfaces modernas e expandir minha versatilidade no desenvolvimento Front-end. Estou sempre em busca de evolução contínua, novos desafios e oportunidades para criar soluções de qualidade.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default SectionAbout;