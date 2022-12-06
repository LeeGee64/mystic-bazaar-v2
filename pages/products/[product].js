import Layout from './components/layouts/layout'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Product() {
    let apiUrl = '../api/staticdata';
    const router = useRouter()
    const { product } = router.query
  
    
    const { data, error } = useSWR(product? apiUrl : null,fetcher);
    
        //Handle the error state
        if (error) return <div>Failed to load</div>;
        //Handle the loading state
        if (!data) return <div>Loading...</div>;
        
        const productObject = JSON.parse(data);
        const prodArray = productObject.products;

        const productItem = prodArray.find((p) => p.name === product);

        return (
            <Layout>
                <Image alt={productItem.name} 
                        src={productItem.images[0].url} 
                        placeholder= "/product-img-placeholder.svg" 
                        width={100} 
                        height={100}/>
                <h1>{productItem.name}</h1>
                <p>{}</p>

            </Layout>
        )

}