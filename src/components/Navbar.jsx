import { useContext } from "react";
import { Link } from "react-router-dom";
import carContext from "../contexts/CarProvider";
import logo from '../assets/logo_e.png'


function Navbar(){
    let {car, setCar} = useContext(carContext);

    return(
        <>
            <header className="bg-zinc-20 flex flex-row justify-between items-center p-5 text-white border-b-gray-950">
                <img src={logo} alt="" width={80} height={80}/>

                <ul className="flex flex-row gap-x-4 [li>Link]:text-white">
                    <li className="bg-cyan-500 py-3 px-4 rounded-2xl hover:shadow-xl transition-[500ms]"><Link to="/" className="py-3 px-4">Inicio</Link></li>
                    <li className="bg-cyan-500 py-3 px-4 rounded-2xl hover:shadow-xl transition-[500ms]"><Link to="/car" className="py-3 px-4">Carrito {car.length != 0 && car.length}</Link></li>
                </ul>
            </header>
            <hr />    
        </>
    )
}

export default Navbar;