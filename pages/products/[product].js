import Layout from '/components/layouts/layout'
import { getPrice } from '../api/productOperations'
import { useRouter } from 'next/router'
import React, { useState } from 'react';
import ProductGallery from '/components/galleries/prodGallery'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Product() {
    let apiUrl = '/api/staticdata';
    const router = useRouter()
    const {product}  = router.query
  
    
    const { data, error } = useSWR({product} ? apiUrl : null,fetcher);
    
    const [calcedPrice,setCalcPrice] = React.useState(0);
    const [selectPrice,setPrice] = React.useState(0);
    const [selectQuant,setQuantity] = React.useState(1);

    let priceCalc = 0;

        //Handle the error state
        if (error) return <div>Failed to load</div>;
        //Handle the loading state
        if (!data) return <div>Loading...</div>;
        
        const productObject = JSON.parse(data);
        const prodArray = productObject.products;

        const productItem = prodArray.find((p) => p.slug === product);

        function calcPrice(e){
            const {value} = e.currentTarget;  
            setQuantity(value);    
            priceCalc = selectQuant * selectPrice;
            setCalcPrice(priceCalc);
        }

        function calcPrice2(price){
            setPrice(price);
            priceCalc = selectQuant * selectPrice;
            setCalcPrice(priceCalc);
        }

        return (
            <Layout> {productItem ? <div class="relative grid grid-cols-2 h-screen">
                     
                <ProductGallery product= {productItem} />

                <div class="relative">
                    <h1>{productItem.name}</h1>
                    <p>{productItem.description}</p>
                    <span>{productItem.displayName}</span>
                    <ul class="flex flex-row">
                        {productItem.options.values.map(
                            (p)=> <li class="p-[1rem] flex flex-col" 
                                    key= {p.label}
                                    onClick= {()=> {calcPrice2(p.price.value)}}
                                    >
                                {p.label} 
                                <br/>
                                {getPrice(p.price.currencyCode, p.price.value)}
                                </li>)}
                    </ul>
                    <form onSubmit={e => e.preventDefault()}>
                        <p>Quantity</p>
                        <input id="priceCalc" 
                            name="priceCalc"
                            type="number"
                            min="1"
                            max="5"
                            value={selectQuant}
                            onChange= {e => {calcPrice(e)}}
                            ></input>
                            <p>{getPrice("USD",calcedPrice)}</p>
                    </form>
                </div>
                </div> : <h2>Sorry, that product doesn't exist.</h2>}

            </Layout>
        )

}