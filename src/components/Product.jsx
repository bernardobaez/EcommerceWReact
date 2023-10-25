import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

function Product({ data, setCar }) {
    let [success, setSuccess] = useState(false);

    const handleAddToCart = () => {
        setCar(data);
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 2000);
    };

    return (
        <>
            <div className="bg-slate-195 rounded-lg p-5 shadow-2xl">
                <img src={data.thumbnail} alt="" style={{ width: "300px", height: "300px" }} />
                <h2 className="text-xl"><strong>Product:</strong> {data.title}</h2>
                <h2 className="text-lg"><strong>Price:</strong> {data.price}$USD</h2>

                <div className="bg-slate-100 p-4 m-2">
                    <h2><strong>Description:</strong></h2> <p>{data.description}</p>
                </div>

                <div className="bg-green-500 p-2 m-2 rounded-lg text-white font-bold">
                    <h2>Available: {data.stock} units</h2>
                </div>

                <button className="bg-purple-700 p-4 rounded-[25px] text-white font-bold hover:shadow-md transition-[300ms]"
                    onClick={handleAddToCart}>
                    Add to Cart
                </button>

                {success &&
                            <div style={{ position: 'fixed', top: '80vh', left: '20px', zIndex: '9999' }}>
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert severity="success">
                                        <AlertTitle><strong>Success</strong></AlertTitle>
                                        {data.title} — <strong>check it out!</strong>
                                    </Alert>
                                </Stack>
                            </div>
                }
            </div>
        </>
    )
}

export default Product;
