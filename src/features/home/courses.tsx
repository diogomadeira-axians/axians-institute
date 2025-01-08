import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AiFillInfoCircle } from "react-icons/ai";

export default function LatestCourses() {

    return (
        <section className="z-10 relative space-y-4">
            <div className="flex gap-2 items-center">
                <div className="w-9 h-9 rounded-full border border-brand-primary-dark flex justify-center items-center">
                    <AiFillInfoCircle aria-hidden='true' size={18} className="text-brand-primary-dark" />
                </div>
                <h1 className="h1">Our latest courses</h1>
            </div>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Welcome to Axians</CardTitle>
                                        <CardDescription>Card Description</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Card Content</p>
                                    </CardContent>
                                    <CardFooter>
                                        <p>Card Footer</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )

}