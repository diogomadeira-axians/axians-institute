import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (
        <Card className="bg-white border-0 rounded-none px-3 sm:px-6 lg:px-10 h-16">
            <div className="container mx-auto flex items-center justify-between">

                <Image className='h-auto w-64' src="axians-institute-logo.svg" alt="map" width={0} height={0} sizes="100vw" />

                <ul className="hidden md:flex items-center gap-10 text-card-foreground">
                    <li className="text-primary font-medium">
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link href="/contacts">Contacts</Link>
                    </li>
                </ul>

                <div className="flex items-center">
                    <Button variant="secondary" className="hidden md:block px-2">
                        Login
                    </Button>

                    <div className="flex md:hidden mr-2 items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <span className="py-2 px-2 bg-gray-100 rounded-md">Pages</span>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="start">
                                {landings.map((page) => (
                                    <DropdownMenuItem key={page.id}>
                                        <Link href={page.route}>{page.title}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-5 w-5 rotate-0 scale-100" />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <a href="#home">Home</a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="#features">Features</a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="#pricing">Pricing</a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <a href="#faqs">FAQs</a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Button variant="secondary" className="w-full text-sm">
                                        Login
                                    </Button>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Button className="w-full text-sm">Get Started</Button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

        </Card>
    );
};

const landings = [
    {
        id: nanoid(),
        title: "Home",
        route: "/",
    },
    {
        id: nanoid(),
        title: "Courses",
        route: "/courses",
    },
    {
        id: nanoid(),
        title: "Contacts",
        route: "/contacts",
    },
];

export default Navbar;