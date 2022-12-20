import Preview from "../products/preview";


export default function LateGallery({lateArray}){

    const leadProduct = lateArray[0]; 
    const followProduct = lateArray.slice(1);

    return (
            <div class="w-full h-80 grid grid-cols-2">
  
                <Preview productItem={leadProduct}/>
                
                <div class= "grid grid-rows-2 grid-cols-2" >
                {followProduct.map((p)=> (
                    <Preview productItem={p}/>))}
                </div>

            </div>
    )
}