import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
 
function Navbar() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);
 
  function logout() {
    handleLogout();
    alert("Usuario deslogado com sucesso");
    navigate("/");
  }
  return (
    <div className='w-full flex justify-center py-8
                bg-gradient-to-r from-[#FFD6E0] via-[#FFB6C1] via-20% to-[#FFD700]
 text-black'>
      <div className="container py-4 flex justify-between max-sm:justify-center">
        <div className="text-xl font-semibold">
          <Link to="/home"> Blog pessoal</Link>
        </div>
        
        <nav className="flex gap-2 max-sm:hidden">
          <Link to='/postagens' className='hover:underline'>Postagens</Link>
          <Link to='/temas' className='hover:underline'>Temas</Link>
          <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
          <Link to="/">Perfil </Link>
          <Link to="" onClick={logout} className="hover:underline">
            Sair
          </Link>
        </nav>
      </div>
    </div>
  );
}
 
export default Navbar;