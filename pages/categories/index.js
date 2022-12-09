import {getAllCategories} from '../api/productOperations'
import Layout from '/components/layouts/layout' 
import Preview from '/components/products/preview'
import Link from 'next/link'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
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

  return (
      <Layout>
        <h1>Categories</h1>
        
        <h2>Product Categories</h2>
        <ul>
            {majArray.map((c)=>{return (
                <li key={c}>
                    <Link href= {`/categories/${c}`}><h2>{c.toUpperCase()}</h2></Link>
                    <ul>
                        {prodArray.map((p)=> {if(p.category.includes(c)){return (
                            <li key={p.id}>
                                <Preview productItem={p}/>
                            </li>
                        )}})}
                    </ul>
                </li>
            )})}
        </ul>

        <h2>Elements</h2>
        <ul>
            {elArray.map((c)=>{return (
                <li key={c}>
                    <Link href= {`/categories/${c}`}><h2>{c.toUpperCase()}</h2></Link>
                    <ul>
                        {prodArray.map((p)=> {if(p.category.includes(c)){return (
                            <li key={p.id}>
                                <Preview productItem={p}/>
                            </li>
                        )}})}
                    </ul>
                </li>
            )})}
        </ul>
      </Layout>)
  }