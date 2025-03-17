"use client";
import React from "react"
import CourseData from '@/data/musicData.json'
import Link from "next/link"
import { BackgroundGradient } from "@/components/ui/background-gradient"


interface Course {
    id: number,
    title: string,
    desc: string,
    price: number,
    instructor: string,
    isFeatured: boolean
}

function FeaturesCourses() {

    const featuresCourses = CourseData.courses.filter((course: Course) => course.isFeatured)
    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text0base text-teal-500 font-bold">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuresCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center ">
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
                                <p className="font-bold text-xl underline ">{course.title}</p>
                                <p className="my-3">{course.desc}</p>
                                <Link className="border border-white  p-2  rounded-xl " href={`/courses/${course.id}`}>
                                    <span className="text-blue-500 font-bold">Learn more</span>  </Link>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 text-center">
                <Link href="/allcourses"
                    className="bg-white p-2 text-xl rounded-lg text-black "
                >view all courses</Link>
            </div>
        </div>
    )
}

export default FeaturesCourses