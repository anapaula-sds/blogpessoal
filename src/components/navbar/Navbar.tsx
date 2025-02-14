import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-8
                bg-lime-400 text-black'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold hover:shadow-xl hover:shadow-black transition-shadow duration-500">Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        <Link to='' className="text-black font-bold text-lg hover:scale-110 transition-transform duration-300">Postagens</Link>
                        <Link to='' className="text-black font-bold text-lg hover:scale-110 transition-transform duration-300">Temas</Link>
                        <Link to='' className="text-black font-bold text-lg hover:scale-110 transition-transform duration-300">Cadastrar tema</Link>
                        <Link to='' className="text-black font-bold text-lg hover:scale-110 transition-transform duration-300">Perfil</Link>
                        <Link to='login' className="text-black font-bold text-lg hover:scale-110 transition-transform duration-300">Sair</Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar