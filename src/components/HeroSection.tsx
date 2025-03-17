import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "../components/ui/moving-boder";


function HeroSection() {
    return (

        <div className="h-auto mt-16 md:mt-20 md:h-[40rem] rounded-md flex flex-col items-center justify-center relative w-full mx-auto overflow-hidden py-10 md:py-0">
            <div className="p-4 relative z-10 w-full text-center">
            <Spotlight
        className="-top-40 left-0 md:-top-30 md:left-80"
        fill="white"
        />
                <h1 className="text-4xl mt-20 md:mt-0 md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of Musically</h1>
                <p className="text-lg md:text-2xl text-white ">The best music streaming platform what about boolywoord ,obue goy abd gut seeevr hhhbssf llo Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium vitae dicta molestias incidunt odio tempora inventore, corrupti neque autem?</p>
                <div className="mt-4">
                    <Link href={"/coursed"}>
                        <Button><span className="text-md font-bold">exproler coursees</span> </Button>
                    </Link>
                </div>
            </div>
        </div>
        
    );
}

export default HeroSection