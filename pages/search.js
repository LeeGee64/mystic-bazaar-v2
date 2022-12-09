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
            .filter(sr => {if(sr.name.match(regex)){return sr}})
            .map(sr => {return (<li key= {sr.id} id={sr.id}><Preview productItem= {sr}/></li>)});
    
        
        if(resultArray.length){
            setSearchArray(searchArray.concat(resultArray));}
        else{
            setSearchArray([]); 
        }
    };


    return (
        <Layout>
            <h1>Search</h1>
            <h2><Link href= "/categories">Categories</Link></h2>
            <h3>Product Groups</h3>
                <ul>
                {majArray.map((p)=> (<li key={p}><Link href= {`/categories/${p}`}>{p}</Link></li>))}
                </ul>
            <h3>Elements</h3>
                <ul>
                {elArray.map((p)=> (<li key={p}><Link href= {`/categories/${p}`}>{p}</Link></li>))}
                </ul>

            <form onSubmit={e => e.preventDefault()}>

            <input id="searchText" name="searchText" placeholder= "Enter Text" onChange= {e => {searchTextChange(e)}} value={searchContent}></input>

            <ul>{searchArray}</ul>
        </form>
        </Layout>
    )
}