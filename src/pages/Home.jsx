import { useContext } from "react";
import carContext from "../contexts/CarProvider";
import Products from "../components/Products";

function Home(){

    let {car, setCar} = useContext(carContext);

    return (<div className="flex flex-row justify-center">
        <div className="w-[80%] p-5">
            <h2 className="text-gray-700 text-2xl font-bold">Productos del dia: </h2>
            <h4 className="text-gray-400 text-2xl font-thin font-bold"><i>Fecha:({new Date().toDateString()})</i> </h4>

            <div className="mt-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
                <Products/>
            </div>
        </div>
    </div>);
}

export default Home;