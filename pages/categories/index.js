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
   

  return (
      <Layout>
        <h1>Categories</h1>

        <ul>
            {catArray.map((c)=>{return (
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