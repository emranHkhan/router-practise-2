import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const repsone = await fetch(`https://fortnite-api.theapinetwork.com/store/get`);
        const data = await repsone.json();
        setItems(data.data);
        
    }

    return (
        <div>
            {items.map(item =><h3 key={item.itemId}><Link to={`/shop/${item.itemId}`}>{item.item.name} </Link></h3>)}
        </div>
    );
};

export default Shop;