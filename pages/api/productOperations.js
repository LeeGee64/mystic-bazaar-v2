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
export function getDate(productDate){
    let dateValue = 0;

    return dateValue;
}