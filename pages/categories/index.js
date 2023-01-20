import {getAllCategories} from '../api/productOperations'
import Layout from '/components/layouts/layout' 
import Preview from '/components/products/preview'
import Link from 'next/link'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
let apiUrl= './api/staticdata';

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
        <h1 class="w-full text-center my-[2rem]">Categories</h1>
        
        <h2 class="ml-[2rem] mb-[1rem]">Product Categories</h2>
        <ul class="ml-[3rem] mb-[5rem]">
            {majArray.map((c)=>{return (
                <li class="my-[1rem]" key={c}>
                    <Link href= {`/categories/${c}`}><h2 class="mb-[1rem]">{c.toUpperCase()}</h2></Link>
                    <ul class="flex flex-row h-[8rem] overflow-scroll">
                        {prodArray.map((p)=> {if(p.category.includes(c)){return (
                            <li class="relative h-full w-[12rem] mx-[1rem]" key={p.id}>
                                <Preview productItem={p}/>
                            </li>
                        )}})}
                    </ul>
                </li>
            )})}
        </ul>

        <h2 class="ml-[2rem] mb-[1rem]">Elements</h2>
        <ul class="ml-[5rem]">
            {elArray.map((c)=>{return (
                <li class="my-[1rem]" key={c}>
                    <Link href= {`/categories/${c}`}><h2 class="mb-[1rem]">{c.toUpperCase()}</h2></Link>
                    <ul class="flex flex-row h-[8rem] overflow-scroll">
                        {prodArray.map((p)=> {if(p.category.includes(c)){return (
                            <li class="relative h-full w-[12rem] mx-[1rem]" key={p.id}>
                                <Preview productItem={p}/>
                            </li>
                        )}})}
                    </ul>
                </li>
            )})}
        </ul>
      </Layout>)
  }