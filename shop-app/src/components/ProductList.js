import { useEffect, useState } from "react";


const api = 'https://dummyjson.com/products';
let pagination = {
    limit: 5,
    skip:  0, 
    total: null
};
export default function ProductList(){

    let [products, setProducts] = useState([]);

    
    useEffect(() => {
        console.log("Effect on component update!");
    });
    useEffect(()=>{
        console.log("Effect on component mount!");
        loadProducts();
    }, []);
    useEffect(() => {
        return () => console.log("Effect on component unmount!");
    }, []);
    
    const loadProducts =()=>{
        let url = `${api}?limit=${pagination.limit}&skip=${pagination.skip}`;

        fetch(url).then(res => res.json()).then(data =>{
            console.log(data);

            pagination.skip += pagination.limit;

            setProducts([...products, ...data.products]);
        });
    }
    return(
        <>
            <h2>Product List</h2>
            <ol>
                {products.map((item, ind) => <li key={ind}>{item.brand} {item.title} {item.price}</li>)}
            </ol>
            <button onClick={loadProducts}>Load more...</button>
        </>
    );
}