import Layout from '/components/layouts/layout'
import { useRouter } from 'next/router'
import {getAllCategories} from '../api/productOperations'
import Preview from '/components/products/preview'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Category() {
    let apiData = '/api/staticdata';
    const router = useRouter()
    const {category}  = router.query
  
    
    const { data, error } = useSWR({category} ? apiData : null,fetcher);
 
        //Handle the error state
        if (error) return <div>Failed to load</div>;
        //Handle the loading state
        if (!data) return <div>Loading...</div>;
        
        const productObject = JSON.parse(data);
        const prodArray = productObject.products;

        const catArray = getAllCategories(prodArray);
        const selectedCat = catArray.find((p) => p === category);
        
     
        const descArray = productObject.catdescription;
        const selectDesc = descArray.find((d)=> d.name === selectedCat)?.description;

        return (selectedCat ? <Layout>
                                <h1 class="text-center">{selectedCat.toUpperCase()}</h1>
                                <p class="text-center p-5">{!selectDesc ? 
                                'Enjoy these ethically sourced and created product!': selectDesc}</p>
                                <div class="py-2 grid gap-5 sm:grid-cols-3">
                                {prodArray.map((p)=> {if(p.category.includes(selectedCat)){return (
                                        <div class="h-40 sm:h-60">
                                        <Preview productItem={p}/>
                                        </div>)}})}
                                </div>
                            </Layout> 
                : <h1>Sorry, this Category does not exist.</h1>)

}