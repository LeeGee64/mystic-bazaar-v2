//creates an array for all product categories

export function getAllCategories(productArray) {
    let categoryArray = [];

    productArray.forEach((p)=> {return categoryArray.push(p.category)});

    let categorySet = [...new Set(categoryArray.flat(1))];  
    return categorySet;
}