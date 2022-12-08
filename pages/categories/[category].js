import Layout from '/components/layouts/layout'
import { useRouter } from 'next/router'
import {getAllCategories} from '../api/productOperations'
import Preview from '/components/products/preview'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Category() {
    let apiUrl = '/api/staticdata';
    const router = useRouter()
    const {category}  = router.query
  
    
    const { data, error } = useSWR({category} ? apiUrl : null,fetcher);
    
        //Handle the error state
        if (error) return <div>Failed to load</div>;
        //Handle the loading state
        if (!data) return <div>Loading...</div>;
        
        const productObject = JSON.parse(data);
        const prodArray = productObject.products;

        const catArray = getAllCategories(prodArray);
        const selectedCat = catArray.find((p) => p === category);
       

        return (selectedCat ? <Layout>
                                <h1>{selectedCat.toUpperCase()}</h1>
                                <p>Custom Descriptor</p>
                                <ul>
                                {prodArray.map((p)=> {if(p.category.includes(selectedCat)){return (
                            <li key={p.id}>
                                <Preview productItem={p}/>
                            </li>
                        )}})}
                                </ul>
                            </Layout> 
                : <h1>Sorry, this Category does not exist.</h1>)

}