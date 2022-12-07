import Image from 'next/image'
import React, {useState} from 'react'



// passing in the product object that the product page is currently displaying
export default function ProductGallery({ product }) {
 
  const [selectedImage, setSelect] = React.useState(0);

  function setImage(num) {
    setSelect(num);
}

  return (<>
    <Image  alt={product.name} 
            src= {product.images[selectedImage].url} 
            placeholder="/product-img-placeholder.svg" 
            width={500} 
            height={500} 
            priority/>
    <h3>Other Images</h3>
    <ul>
    {product.images.map((p,i)=> {return (
        <li id={i}>
            <Image alt={p.altText}
                    src={p.url}
                    placeholder="/product-img-placeholder.svg" 
                    width={200}
                    height={200}
                    />
        </li>
    )})}
    </ul>

    </>)
}
