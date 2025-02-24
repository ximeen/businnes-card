import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Globe } from "lucide-react";


export function Links() {
    return (
        <div className="flex flex-col gap-4 w-[90%] lg:w-[680px]">
            <Card className="hover:bg-stone-200 dark:hover:bg-background transition-all  ">
                <a
                className="relative" 
                href="https://api.whatsapp.com/send?phone=+5599991272791&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20loja!" target="_blank">
                    <CardContent className="flex p-4 gap-4">
                        <div className="h-12 w-12 rounded-xl bg-zinc-200/40 dark:bg-zinc-800/40 flex items-center justify-center">
                            <img className="h-7 w-7" src="/logo-whats.png" alt="" />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <span className="text-sm text-muted-foreground">Link</span>
                            <span>WhatsApp</span>
                        </div>
                        
                    </CardContent>
                    <ChevronRight className="absolute text-green-400 top-1/2 right-3 transform -translate-x-1/2 -translate-y-1/2"/>
                </a>
            </Card>
            <Card className="hover:bg-stone-200 dark:hover:bg-background transition-all  ">
                <a className="relative"  href="https://www.instagram.com/orenrefrigeracaoautomotiva/" target="_blank">
                    <CardContent className="flex p-4 gap-4">
                        <div className="h-12 w-12 rounded-xl bg-zinc-200/40 dark:bg-zinc-800/40 flex items-center justify-center">
                            <img className="h-10 w-10" src="/logo-instagram.png" alt="" />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <span className="text-sm text-muted-foreground">Link</span>
                            <span>Instagram</span>
                        </div>
                    </CardContent>
                    <ChevronRight className="absolute text-green-400 top-1/2 right-3 transform -translate-x-1/2 -translate-y-1/2"/>
                </a>
            </Card>

            <Card className="hover:bg-stone-200 dark:hover:bg-background transition-all  ">
                <a className="relative"  href="https://www.orenrefrigeracao.com.br/" target="_blank">
                    <CardContent className="flex p-4 gap-4">
                        <div className="h-12 w-12 rounded-xl bg-zinc-200/40 dark:bg-zinc-800/40 flex items-center justify-center">
                            <img src="ARV.png" className="h-10 w-10" />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <span className="text-sm text-muted-foreground">Link</span>
                            <span>Compre em nosso site oficial!</span>
                        </div>
                    </CardContent>
                    <ChevronRight className="absolute text-green-400 top-1/2 right-3 transform -translate-x-1/2 -translate-y-1/2"/>
                </a>
            </Card>
            <Card className="hover:bg-stone-200 dark:hover:bg-background transition-all  ">
                <a className="relative"  href="https://www.mercadolivre.com.br/loja/oren-refrigeracao-automotiva"target="_blank">
                    <CardContent className="flex p-4 gap-4">
                        <div className="h-12 w-12 rounded-xl bg-zinc-200/40 dark:bg-zinc-800/40 flex flex-col items-center justify-center">
                            <img src="mercado-livre.png" className="h-10 w-10"/>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <span className="text-sm text-muted-foreground">Link</span>
                            <span>Compre em nossa loja oficial no Mercado livre.</span>
                        </div>
                    </CardContent>
                    <ChevronRight className="absolute text-green-400 top-1/2 right-3 transform -translate-x-1/2 -translate-y-1/2"/>
                </a>
            </Card>

        </div>
    )
}