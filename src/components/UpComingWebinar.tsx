'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
 const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];


function UpComingWebinar() {
    return (
        <div className="p-12 bg-gray=900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="font-bold text-teal-500 font-bol">Featured WEBINARS</h2>
                    <p className="text-4xl mt-2">Enhance Your Musical Journey</p>
                </div>
                <div className="mt-10">
                    <div className="max-w-5xl mx-auto px-8">
                        <HoverEffect items={projects.map(webinar=>(
                            {
                                title: webinar.title,
                                description: webinar.description,
                                link: webinar.link
                            }
                        ))} />
                    </div>
                    {/* <HoverEffect items={projects} /> */}
                </div>
                <div className=" text-center">
                    <Link href="/allcourses"
                        className="bg-white p-2 text-xl rounded-lg text-black "
                    >view Details </Link>
                </div>
            </div>
        </div>
    )
}

export default UpComingWebinar