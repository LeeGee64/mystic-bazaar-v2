import Image from 'next/image'
import Link from 'next/link'
import { getPrice } from '/pages/api/productOperations'

export default function Preview({productItem}) {
    return (
    // <Link href= {`/products/${productItem.slug}`}>
    // <div id={productItem.name}>
    //     <Image alt={productItem.name} src={productItem.images[0].url} placeholder= "/product-img-placeholder.svg" width={100} height={100}/>
    //     <span>{productItem.name}</span>
    //     <span>From: {getPrice(productItem.options.values[0].price.currencyCode, 
    //                             productItem.options.values[0].price.value)}</span>
    // </div>
    // </Link>
    
    // <Link class="max-h-full" href= {`/products/${productItem.slug}`}></Link>
   
    <div class="relative h-full" key={productItem.id} id={productItem.name}>
     <Link href= {`/products/${productItem.slug}`}>
        <Image alt={productItem.name} 
                src={productItem.images[0].url} 
                placeholder= "/product-img-placeholder.svg" 
                fill
                objectFit= "cover"
                priority
                style={{zIndex: 0}}
                />
        <div class="absolute" style={{zIndex:1}}>
        <span>{productItem.name}</span>
        <br/>
        <span>From: {getPrice(productItem.options.values[0].price.currencyCode, 
                                productItem.options.values[0].price.value)}</span>
        </div>
        </Link>
    </div>
    
    );
}