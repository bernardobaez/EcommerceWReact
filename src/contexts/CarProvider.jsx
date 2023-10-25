import { createContext, useState } from "react";

let carContext = createContext();

function CarProvider({children}){
    let [car, setCar] = useState([]);

    let data = {car, setCar};
    
    return(
        <carContext.Provider value={data}>
            {children}
        </carContext.Provider>
    )
}

export {CarProvider}
export default carContext;