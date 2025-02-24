import { useState } from "react";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";



export function Gallery(){
    const images: string[] = [
        "entrada.jpg",
        "corredor.jpg",
        "compressor-axor.jpg",
        "rack.jpg"
    
    ]
    
    const [loaded, setLoaded] = useState(Array(images.length).fill(false))

    const handleLoad = (index: any)=>{
        setLoaded((prev)=>{
            const newState = [...prev];
            newState[index] = true;
            return newState;
        })
    }

    return(
        <>
        <div className="relative mt-5">
				<Separator className="lg:w-[800px] w-96" />
				<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-2 text-muted-foreground">
					Imagens
				</span>
			</div>

            <div className="grid grid-rows-2 grid-cols-2 px-20 gap-4 ">
            {images.map((src: string, index:number)=>(
                <div key={index}>
                    {!loaded[index] && <Skeleton className="w-[400px] h-[500px] rounded-lg"/>}
                    <img src={src} className={`rounded-lg w-[400px] h-[500px] bg-cover bg-center transition-opacity duration-1000 ${loaded[index] ? "opacity-100" : "opacity-0"}`}
                    onLoad={()=> handleLoad(index)}
                    >
                    </img>
                </div>
            ))}


            
            </div>

        </>
    )
}

