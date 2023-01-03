import Image from 'next/image'
import React, {useState} from 'react'



// passing in the product object that the product page is currently displaying
export default function ProductGallery({ product }) {
 
  const [selectedImage, setSelect] = React.useState(0);

  return (<div class="grid sm:grid-rows-4 sm:max-h-[400px] sm:w-[400px] sm:gap-y-2">
    <div class="relative h-full row-span-3">
    <Image  alt={product.name} 
            src= {product.images[selectedImage].url} 
            placeholder="/product-img-placeholder.svg" 
            fill
            objectFit="cover" 
            priority/>
    </div>
    <div class="grid sm:grid-cols-3 sm:gap-x-2">
    {product.images.map((p,i)=> {return (
        <div class="h-full relative" key={i} id={i}>
            <Image alt={p.altText}
                    src={p.url}
                    placeholder="/product-img-placeholder.svg" 
                    fill
                    objectFit="cover"
                    onClick={ () => setSelect(i)}
                    />
        </div>
    )})}
    </div>
    </div>)
}
