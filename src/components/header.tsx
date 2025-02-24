import { Helmet } from "react-helmet-async";
import { ThemeToggle } from "./themes/theme-toggle";

export function Header() {
    return (
        <>
            <Helmet title="Sobre" />
            <div className="flex justify-end lg:mt-10  lg:mr-10 mt-8 mr-8">
                <ThemeToggle />
            </div>
            <header className="flex flex-col items-center justify-center ">

                <div className="lg:w-44  lg:h-44 w-24 h-24 bg-zinc-100 rounded-full flex items-center">
                    <img src="/MAIN_LOGO.png" alt="Logo completa, Oren refrigeração Automotiva" />
                </div>
                <h1 className="lg:text-2xl text-xl font-bold text-primary mt-4 antialiased">Oren Refrigeração Automotiva</h1>
                <div className="mt-2">
                    <a
                        className="text-sm  lg:text-base text-muted-foreground cursor-pointer hover:text-foreground transition-all"
                        href="https://www.instagram.com/orenrefrigeracaoautomotiva/">
                        @orenrefrigeracaoautomotiva
                    </a>

                </div>
            </header>

        </>
    )
}