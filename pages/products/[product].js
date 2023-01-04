import Layout from '/components/layouts/layout'
import { getPrice } from '../api/productOperations'
import { useRouter } from 'next/router'
import ProductGallery from '/components/galleries/prodGallery'
import Preview from '../../components/products/preview'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Product() {
    let apiUrl = '/api/staticdata';
    const router = useRouter()
    const {product}  = router.query
  
    
    const { data, error } = useSWR({product} ? apiUrl : null,fetcher);
    

        //Handle the error state
        if (error) return <div>Failed to load</div>;
        //Handle the loading state
        if (!data) return <div>Loading...</div>;
        
        const productObject = JSON.parse(data);
        const prodArray = productObject.products;

        const productItem = prodArray.find((p) => p.slug === product);

        return (
            <Layout> {productItem ?
            
                <div class="relative grid grid-cols-2 h-screen">
                     
                    <ProductGallery product= {productItem} />

                    <div class="relative">
                        <h1>{productItem.name}</h1>
                        <p>{productItem.description}</p>
                        <span>{productItem.displayName}</span>
                        <ul class="flex flex-row">
                            {productItem.options.values.map(
                                (p)=> <li class="p-[1rem] flex flex-col" 
                                        key= {p.label}>
                                    {p.label} 
                                    <br/>
                                    {getPrice(p.price.currencyCode, p.price.value)}
                                    </li>)}
                        </ul>
                        <h3>Similar Items</h3>
                        <div class="grid grid-cols-3 gap-3 h-[100px] relative">
                            {prodArray.filter((p)=> {
                                if(p.id !== productItem.id){ if(p.category.includes(productItem.category[1]) 
                                    || p.category.includes(productItem.category[0])){
                                        return (p)
                                }}
                            }).slice(0,3).map((p)=>(<Preview productItem={p}/>))}
                        </div>
                    </div>
                </div>: <h2>Sorry, that product doesn't exist.</h2>}

            </Layout>
        )

}