import Layout from '/components/layouts/layout'
import Image from 'next/image'
import { useRouter } from 'next/router'
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
                        <Image alt={productItem.name} 
                                src={productItem.images[0].url} 
                                placeholder= "/product-img-placeholder.svg" 
                                width={100} 
                                height={100}/>
                        {/* Gallery Component Here */}
                        <h1>{productItem.name}</h1>
                        <p>{productItem.description}</p>
                        <span>{productItem.displayName}</span>
                        <ul>
                            {productItem.options.values.map(
                                (p)=> <li key= {p.label}>{p.label} :  
                                {new Intl.NumberFormat('en-US', { style: 'currency', currency: `${p.price.currencyCode}` }).format(p.price.value)}</li>
                                )}
                        </ul>
                        </> : <h2>Sorry, that product doesn't exist.</h2>}

            </Layout>
        )

}