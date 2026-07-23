function SectionContact() {
    return (
        <section id="Contact" className="bg-teste py-10">
            <div className=" content-container-contact  bg-white w-full rounded-2xl shadow-xl/30">
                <div className="border-b border-gray-200 mb-5">
                    <h2 className="text-4xl font-medium pt-10 pb-3 pl-5 " >
                        Contato
                    </h2>
                </div>
                <div className="grid gap-y-8 md:grid-cols-2">
                    <article className="pl-5 pt-5">
                        <h2 className="text-2xl font-medium tracking-wide pb-3">Telefone</h2>
                        <p className=" lg:text-base  text-zinc-900  text-sm  ">
                            +55 11 976595833
                        </p>
                    </article>
                    <article className=" pl-5 md:pt-5">
                        <h2 className="text-2xl font-medium tracking-wide pb-3">Email</h2>
                        <p id="link-contact" className=" w-full lg:text-base  text-zinc-900 text-sm ">
                            joaovitorramosdealmeida55@gmail.com
                        </p>
                    </article>
                    <article className="pl-5">
                        <h2 className="text-2xl font-medium tracking-wide pb-3">LinkedIn</h2>
                        <a id="link-contact" className=" lg:text-base text-zinc-900 text-sm hover:text-primary" href="https://www.linkedin.com/in/joaoramosalmeida/" target="_blank" rel="noopener noreferrer">
                            https://www.linkedin.com/in/joaoramosalmeida
                        </a>
                    </article>
                    <article className="pl-5 pb-10">
                        <h2 className="text-2xl font-medium tracking-wide pb-3 ">Github</h2>
                        <a id="link-contact" className=" lg:text-base text-zinc-900  text-sm hover:text-primary" href="https://github.com/JoaoVitorRamos7" target="_blank" rel="noopener noreferrer">
                            https://github.com/JoaoVitorRamos7
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default SectionContact;