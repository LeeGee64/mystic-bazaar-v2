import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import {getAllCategories} from './api/productOperations'
import Layout from '/components/layouts/layout' 
import Preview from '/components/products/preview'
import useSWR from 'swr';
import Link from 'next/link'

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
    let catArray = ["herbs","crystals","pouches"];
   

  return (
      <Layout>
        <section id="intro">
          <Image alt="the bazaar" src="/bazaar.jpeg" placeholder="/product-img-placeholder.svg" width={500} height={500} priority/>
          <p>A one-stop shop for all of your magical needs! 
            All of our products our ethically sourced and sold fair trade, so you can 
            practice worry-free!</p>
        </section>
        <section id="latest">
          <h2>Latest</h2>
          <ul>
           {prodArray
           .sort((a,b)=>{
              const date1 = new Date(a.date);
              const date2 = new Date(b.date);

              return date2 -date1;
           })
           .slice(0,5)
           .map((p)=> (<li key={p.id}><Preview productItem= {p}/></li>))}
          </ul>
        </section>
        <section id="category">
          <Link href='/categories'><h2>Categories</h2></Link>
          <ul>
            {catArray.map((p)=> (<li key={p}><Link href= {`/categories/${p}`}>{p.toUpperCase()}</Link></li>))}
          </ul>
        </section>
        <section id="whatis">
          <h2>What is this Place?</h2>
          <p>Short answer: A nexus for magic and wonder.</p>
          <p>Longer answer: alaffjosiosdiohsdfhiosdfhiofhioasdfio</p>
        </section>
      </Layout>
  )
}

