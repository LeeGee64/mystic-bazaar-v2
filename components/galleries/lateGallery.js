import Preview from "../products/preview";
import Image from 'next/image'


export default function LateGallery({lateArray}){

    const leadProduct = lateArray[0]; 
    const followProduct = lateArray.slice(1);

    return (
            <div class="w-full h-80 grid grid-cols-2">
                <div class="relative"><Image 
                                        alt={leadProduct.name} 
                                        src= {leadProduct.images[0].url} 
                                        fill
                                        objectFit="cover"
                                        />
                                        </div>
                
                <div class= "grid grid-rows-2 grid-cols-2">
                {followProduct.map((p)=> (<div class="relative" key={p.id}>
                                            <Image alt={p.name} 
                                                src= {p.images[0].url} 
                                                fill
                                                objectFit= "cover"
                                                 /></div>))}
                </div>
            </div>
    )
}