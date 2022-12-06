// //useSWR allows the use of SWR inside function components
// import useSWR from 'swr';

// //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
// const fetcher = (url) => fetch(url).then((res) => res.json());
// // let apiUrl = '/api/staticdata';

// 

export function getAllCategories(productArray) {
    let categoryArray = [];

    productArray.forEach((p)=> {return categoryArray.push(p.category)});

    let categorySet = [...new Set(categoryArray.flat(1))];  
    return categorySet;
}