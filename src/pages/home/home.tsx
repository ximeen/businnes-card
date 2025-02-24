import { GoogleMaps } from "@/components/google-maps";
import { Links } from "./links";
import { Gallery } from "@/components/gallery";


export function Home() {
    return (
        <div className="flex flex-col gap-6 items-center justify-center mt-10 w-ful">
            <Links />
            <GoogleMaps />
            <Gallery />
        </div>
    )
}