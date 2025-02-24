import { Separator } from "./ui/separator";


export function Gallery(){
    return(
        <>
        <div className="relative mt-5">
				<Separator className="lg:w-[680px] w-96" />
				<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-2 text-muted-foreground">
					Imagens
				</span>
			</div>

            <div className="grid grid-rows-2 grid-cols-2 px-20 gap-4 ">
            <img src="entrada.jpg" alt="" className="rounded-lg w-[400px] h-[500px] bg-cover bg-center"/>
            <img src="corredor.jpg" alt="" className="rounded-lg w-[400px] h-[500px] bg-cover bg-center"/>
            <img src="compressor.jpg" alt="" className="rounded-lg w-[400px] h-[500px] bg-cover bg-center"/>
            <img src="expedicao.jpg" alt="" className="rounded-lg w-[400px] h-[500px] bg-cover bg-center"/>
            </div>

        </>
    )
}