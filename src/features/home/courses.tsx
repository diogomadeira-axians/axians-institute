import TrainingCard from "@/components/trainingCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AiFillInfoCircle } from "react-icons/ai";

export default function LatestCourses() {

    return (
        <section className="z-10 relative space-y-4">
            <div className="flex gap-2 items-center">
                <div className="w-9 h-9 rounded-full border border-brand-primary-dark flex justify-center items-center">
                    <AiFillInfoCircle aria-hidden='true' size={18} className="text-brand-primary-dark" />
                </div>
                <h2 className="h2">Our latest courses</h2>
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
                            <TrainingCard />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className="flex justify-end">
                <a href="#" className="font-medium text-brand-primary-main dark:text-brand-primary-dark hover:underline">Access all courses</a>

            </div>
        </section>
    )

}