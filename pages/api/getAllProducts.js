//useSWR allows the use of SWR inside function components
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());
// let apiUrl = '/api/staticdata';

export default function getAllProducts(apiUrl) {
    
    const { data, error } = useSWR(apiUrl, fetcher);

    //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    
    let productObject = JSON.parse(data);
  let productArray = productObject.products;

    return (Object.values(productArray));

}