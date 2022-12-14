import Layout from '/components/layouts/layout'
import { getPrice } from '../api/productOperations'
import { useRouter } from 'next/router'
import ProductGallery from '/components/galleries/prodGallery'
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
            <Layout> {productItem ? <>
                        <ProductGallery product= {productItem} />
                        <h1>{productItem.name}</h1>
                        <p>{productItem.description}</p>
                        <span>{productItem.displayName}</span>
                        <ul>
                            {productItem.options.values.map(
                                (p)=> <li key= {p.label}>{p.label} :  
                                {getPrice(p.price.currencyCode, p.price.value)}</li>)}
                        </ul>
                        </> : <h2>Sorry, that product doesn't exist.</h2>}

            </Layout>
        )

}