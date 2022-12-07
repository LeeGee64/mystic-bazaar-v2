import Image from 'next/image'
import Link from 'next/link'

export default function Preview({productItem}) {
    return (
    <Link href= {`/products/${productItem.slug}`}>
    <div id={productItem.name}>
        <Image alt={productItem.name} src={productItem.images[0].url} placeholder= "/product-img-placeholder.svg" width={100} height={100}/>
        <span>{productItem.name}</span>
        <span>From: 
            {new Intl.NumberFormat('en-US', 
            { style: 'currency', currency: `${productItem.options.values[0].price.currencyCode}` })
            .format(productItem.options.values[0].price.value)}</span>
    </div>
    </Link>
    );
}