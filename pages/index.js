import Image from 'next/image'
import { getLatest } from './api/productOperations';
import Layout from '/components/layouts/layout' 
import CatPreview from '../components/products/categoryPreview';
import useSWR from 'swr';
import Link from 'next/link'
import LateGallery from '../components/galleries/lateGallery';

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
        <section class="my-[2rem]" id="latest">
          <h2 class="mb-[1rem]">Latest</h2>
          <LateGallery lateArray={getLatest(prodArray,5)}/>
        </section>

        <section class="my-[2rem] p-[3rem] bg-emerald-600" id="category">
          <Link href='/categories'><h2 class="mb-[1rem] w-full text-center">Categories</h2></Link>
          <ul class="flex flex-row">
            {catArray.map((p)=> (<li key={p} class="h-[10rem] w-full m-[1rem]">
              <CatPreview catName={p} productArray= {prodArray}/>
              </li>))}
          </ul>
        </section>

        <section class="py-[2rem]" id="whatis">
          <h2 class="mb-[1rem] w-full text-center">What is this Place?</h2>
          <div class="flex flex-row">
            <figure>
              <Image alt="the bazaar" src="/bazaar.jpeg" placeholder="/product-img-placeholder.svg" width={500} height={500} />
              <figcaption>Welcome to the Mystic Bazaar!</figcaption>
            </figure>
            <div class="px-[2rem] flex flex-col">
              <p class="mt-[2rem]"><span class="font-bold">Short answer:</span> A nexus for magic and wonder.</p>
              <p class="mt-[2rem]"><span class="font-bold">Long answer:</span> A one-stop shop for all of your magical needs! 
                All of our products our ethically sourced and sold fair trade, so you can 
                practice worry-free!</p>
            </div>
          </div>
        </section>
      </Layout>
  )
}

