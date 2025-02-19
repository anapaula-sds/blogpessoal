function Home() {
    return (
        <div className="flex 
                        justify-center 
                        bg-[#FFF8E7]

">
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
                                    text-[#905D5D]
                                    ">
                        Seja Bem Vindo!
                    </h2>
                    <p className="text-xl text-[#905D5D]">
                        Expresse aqui seus pensamentos e
                        opiniões
                    </p>

                    <div className="flex
                                    justify-around
                                    gap-4">
                        <div className="rounded border-amber-900 border-solid border-2 py-2 px-4 text-[#B8860B]  
                transition duration-300 ease-in-out 
                hover:bg-red-300 hover:text-[#5A3E2B] cursor-pointer">
                            Nova Postagem
                        </div>
                    </div>
                </div>
 
                <div className="flex
                                justify-center">
                    <img
                        src="https://i.imgur.com/4uwjxbB.gif"
                        alt="Imagem da Página Home"
                        width="400px" className="w-2/3"
                    />
                </div>
            </div>
        </div>
    )
}
 
export default Home