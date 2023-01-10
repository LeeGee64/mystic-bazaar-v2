import Layout from '/components/layouts/layout'
import React, { useState } from 'react';
import useSWR from 'swr';
import Preview from '/components/products/preview'
import {getAllCategories} from './api/productOperations'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Search(){

 const [searchContent, setSearchContent] = React.useState('');
 const [searchArray, setSearchArray] = React.useState([]);
 
 let apiUrl = './api/staticdata';
 
 const { data, error } = useSWR(apiUrl, fetcher);

    //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    
    const productObject = JSON.parse(data);
    const prodArray = productObject.products;

    let catArray = getAllCategories(prodArray);
    let majArray = ["herbs","crystals","pouches"];
    let elArray = catArray.filter((p)=>{if(!majArray.includes(p)){return p}})
                          .sort((a, b) => a.localeCompare(b));


  function searchTextChange(e){
        const {value} = e.currentTarget;
        let regex = null;
        let resultArray = [];

        if(value){
            regex = new RegExp(`^(${value})`,"i");
        }
        
        setSearchContent(value);
        setSearchArray(searchArray.length = 0); 

        resultArray = prodArray
            .filter(sr => {if(sr.name.match(regex)){return sr}});
    
        
        if(resultArray.length){
            setSearchArray(searchArray.concat(resultArray));}
        else{
            setSearchArray([]); 
        }
    };


    return (
        <Layout>
            <div class="flex flex-row">
                <section class="flex flex-col gap-3 m-[2rem]">
                    <h1>Search</h1>
                    <h2><Link href= "/categories">Categories</Link></h2>
                    <h3>Product Groups</h3>
                        <ul>
                        {majArray.map((p)=> (<li key={p}><Link href= {`/categories/${p}`}>{p.toUpperCase()}</Link></li>))}
                        </ul>
                    <h3>Elements</h3>
                        <ul>
                        {elArray.map((p)=> (<li key={p}><Link href= {`/categories/${p}`}>{p.toUpperCase()}</Link></li>))}
                        </ul>
                </section>

                <section class="grow p-[2rem]">
                <form class="w-4/5 grid justify-items-center" 
                    onSubmit={e => e.preventDefault()}>

                <input  id="searchText" name="searchText" placeholder= "Search"
                        class="mb-[0.3rem]"
                        onChange= {e => {searchTextChange(e)}} 
                        value={searchContent}>
                </input>
                
                <div class="grid grid-cols-3 relative">
                {searchArray
                .map(sr => {return (<div key= {sr.id} id={sr.id} class="h-[150px] w-[300px] relative m-[5px]">
                <Preview productItem= {sr}/></div>)})}</div>
                </form>
           
            </section>
        </div>
        </Layout>
    )
}