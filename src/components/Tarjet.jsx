import { useContext, useState, useEffect } from "react";
import carContext from "../contexts/CarProvider";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

function Tarjet({data}){
    let {car, setCar} = useContext(carContext);
    let [showAlert, setShowAlert] = useState(false);

    function remove() {
        setShowAlert(true);

        setTimeout(()=>{
            setCar(prevCar => prevCar.filter(ele => ele.id !== data.id));
        }, 400)
    }

    // Ocultar el mensaje de alerta cuando el componente se desmonta o cuando data cambia
    useEffect(() => {
        return () => {
            setShowAlert(false);
        };
    }, [data]);

    console.log();
    return(
        <div className="mt-2 bg-slate-150 p-3 rounded-xl">
            <h2 className="text-2xl"><strong>{data.title}</strong></h2>
            <h2>Item brand: {data.brand}</h2>
            <h2>Cant: {data.count}</h2>
            <h2>Category: {data.category}</h2>
            <h2>Price: {data.price}</h2>

            <button className="bg-red-500 p-3 rounded-lg mt-2 text-white hover:shadow-md transition-[300ms] mb-5"
            onClick={remove}>
                Remove
            </button>
            <strong><hr /></strong>

            {showAlert &&
                    <div style={{ position: 'fixed', top: '80vh', left: '20px', zIndex: '9999' }}>
                            <Stack sx={{ width: '100%' }} spacing={2}>
                                <Alert severity="error">
                                    <AlertTitle>Removing item</AlertTitle>
                                    {data.title} — <strong>check it out!</strong>
                                </Alert>
                            </Stack>
                    </div>
                }
        </div>
    )
}

export default Tarjet;