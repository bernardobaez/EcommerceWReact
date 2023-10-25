import { useContext, useEffect, useState } from "react";
import carContext from "../contexts/CarProvider";
import Tarjet from "../components/Tarjet";

function Cart(){
    let {car, setCar} = useContext(carContext);
    let [items, setItems] = useState([]);

    useEffect(()=>{
        setItems(car);
    }, [car]);

    function getTotal(){
        if(car.length > 0){
            return car.reduce((a,b) => a + b.price * b.count, 0);
        }
    }

    return(
        <div className="flex flex-row justify-center">
            <div className="w-[80%] p-5">
            <h2 className="text-gray-700 text-2xl font-bold">Car items: </h2>

            <div className="items min-h-[40vh] max-h-[65vh] overflow-y-scroll">
                {car.length == 0 ? (
                    <h2 className="mt-3 text-xl font-thin">There's no car items...</h2>
                ) : (
                    items.map(item=>{
                        return(
                            <Tarjet key={item.id} data={item}/>
                        )
                    })
                )}
            </div>
            
            {car.length > 0 && (
                                <h2 className="text-xl">
                                    <strong>TOTAL: </strong> {getTotal()}$USD
                                 </h2>
            )}
            
            <div className="w-[100%] flex flex-row justify-center">
                {car.length > 0 && (
                                <button className="mt-2 bg-green-500 p-5 text-white font-bold rounded-lg">
                                    Pay items
                                </button>
                )}
            </div>

            </div>
        </div>
    );
}

export default Cart;