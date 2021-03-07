import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {

    const {itemId} = useParams();

    const buttonStyle = {
        padding: 10,
        backgroundColor: 'blue',
        color: 'white',
        fontWeight: 'bold',
        border: 0,
        marginTop: 20,
        cursor: 'pointer',
        outline: 'none',
        borderRadius: 10
    }

    useEffect(() => {
        fetchItem();
    },[])

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const response = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${itemId}`);
        const data = await response.json();
        setItem(data.data.item);
        
    }

    return (
        <>
        <Link to="/shop"><button style={buttonStyle}>Go Back</button></Link>
        <h1>{item.name}</h1>
        <img src={item.images.background} alt=""/>
        </>
    );
};

export default ItemDetail;