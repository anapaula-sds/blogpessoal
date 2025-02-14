function Home() {
    return (
        <div className="flex 
                        justify-center 
                        bg-black">
            <div className="container 
                            grid 
                            grid-cols-2 
                            text-white">
                <div className="flex 
                                flex-col 
                                items-center 
                                justify-center 
                                gap-4 
                                py-4">
                    <h2 className="text-5xl
                                    font-bold
                                    ">
                        Seja Bem Vindo!
                    </h2>
                    <p className="text-xl">
                        Expresse aqui seus pensamentos e
                        opiniões
                    </p>

                    <div className="flex
                                    justify-around
                                    gap-4">
                        <div className="rounded border-white border-solid border-2 py-2 px-4 text-white 
                transition duration-300 ease-in-out 
                hover:bg-white hover:text-indigo-900 cursor-pointer">
                            Nova Postagem
                        </div>
                    </div>
                </div>
 
                <div className="flex
                                justify-center">
                    <img
                        src="https://i.imgur.com/Udd34xE.gif"
                        alt="Imagem da Página Home"
                        width="400px" className="w-2/3"
                    />
                </div>
            </div>
        </div>
    )
}
 
export default Home