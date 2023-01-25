import Image from 'next/image'
import Link from 'next/link'

export default function CatPreview({catName, productArray}) {
    
const catArray = productArray.filter(p=> {if(p.category.includes(catName)){
       return p; 
    }});

const catImage = catArray[Math.floor(Math.random() * (catArray.length-1))].images[0].url;
    
    return (
   
    <div class="relative h-full" key={catName} id={catName}>
        <h4 class="w-full text-center">{catName.toUpperCase()}</h4>
        <div class="relative h-full">
        <Link href= {`/categories/${catName}`}>
            <Image alt={catName} 
                    src={catImage} 
                    placeholder= "blur"
                    blurDataURL={'data:/product-img-placeholder.svg'} 
                    fill
                    objectFit= "cover"
                    priority
                    />
        </Link>
        </div>
    </div>
    
    );
}