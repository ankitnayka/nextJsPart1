'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="ourCourses">
                    <div className="flex flex-col space-y-2 p-2 ">
                        <HoveredLink className="" href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/courses">React js </HoveredLink>
                        <HoveredLink href="/courses">Node js </HoveredLink>
                        <HoveredLink href="/courses">MERN STACK</HoveredLink>
                        <HoveredLink href="/courses">Php </HoveredLink>
                    </div>
                </MenuItem>
                <Link href="/contact">
                    <MenuItem setActive={setActive} active={active} item="Contact">
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}


export default Navbar;