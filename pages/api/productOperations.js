//creates an array for all product categories

export function getAllCategories(productArray) {
    let categoryArray = [];

    productArray.forEach((p)=> {return categoryArray.push(p.category)});

    let categorySet = [...new Set(categoryArray.flat(1))];  
    return categorySet;
}

// a smoother way to return properly formatted product price

export function getPrice(currency,value){
    
    let finalPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(value);
    
    return finalPrice;
}

//pulls out Date value from porducts
export function getLatest(productArray,num){
    let sortedDateArray = productArray
    .sort((a,b)=>{
       const date1 = new Date(a.date);
       const date2 = new Date(b.date);

       return date2 -date1;
    })
    .slice(0,num);

    return sortedDateArray;
}