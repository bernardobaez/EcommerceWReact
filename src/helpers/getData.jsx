import axios from "axios";


async function getData(){
    let {data} = await axios.get("https://dummyjson.com/products");
    return data.products;
}


export default getData;