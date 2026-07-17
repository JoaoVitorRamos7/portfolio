import Skills from "./skills.jsx";


function Main(){
    return(
        <main>
            <section className="content-container py-20" id="Skills">
                <div className="border-b border-gray-200 pb-3 mb-10 md:pb-5 ">
                    <h2 className="text-4xl font-medium tracking-wider capitalize md:text-3xl ">Conjunto de Tecnologias</h2>
                </div>
               <Skills/>
            </section>
        </main>
    );
}

export default Main;