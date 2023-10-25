import { useContext, useEffect, useState } from "react";
import carContext from "../contexts/CarProvider";
import getData from "../helpers/getData";
import Product from "./Product";

function Products(){
    let {car, setCar} = useContext(carContext);
    let [product, setProduct] = useState(null);

    useEffect(()=>{
        getData().then(data =>{
            setProduct(data);
        });
    }, []);

    function handleCar(data) {
        const elementoExistente = car.find(element => element.id === data.id);
      
        if (elementoExistente) {
          const updatedCar = car.map(element => {
            if (element.id === data.id) {
              
              return { ...element, count: (element.count ?? 0) + 1 };
            }
            return element;
          });
          setCar(updatedCar);
        } else {
          setCar([...car, { ...data, count: 1 }]);
        }
      }

    return(
        <>
            {product != null && (
                product.map((ele)=>{
                    return(<Product key={ele.id} data={ele} setCar={handleCar}/>)
                })
            )}
        </>
    )
}

export default Products;