import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SelectFilter from "@/features/courses/select-filter"
import TabFilter from "@/features/courses/tab-filter"
import { useState } from "react";
import { MdOutlineFilterAlt } from "react-icons/md";

export default function CoursesFilter() {
    // Get window width to set initial filter state: if Mobile - false, if Desktop: true
    const [displayFilters, setDisplayFilters] = useState(window.innerWidth >= 640)

    const filtesLists = {
        country_institute: [{name: "Value 1", value: "Value 1"}, {name: "Value 2", value: "Value 2"}],
        language: [{name: "Value 1", value: "Value 1"}, {name: "Value 2", value: "Value 2"}],
        topic: [{name: "Value 1", value: "Value 1"}, {name: "Value 2", value: "Value 2"}],
        duration: [{name: "Value 1", value: "Value 1"}, {name: "Value 2", value: "Value 2"}],
        training_path: [{name: "Value 1", value: "Value 1"}, {name: "Value 2", value: "Value 2"}],
    }

    return (
        <section className="space-y-4 z-10 relative mx-5 md:m-0">
            <div className="flex gap-2">
                <Input placeholder="Search all courses" className="border-brand-primary-dark"/>
                <Button variant="link" className="w-16">Clear</Button>
                <Button>Search</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex justify-between gap-5 md:block">
                    <TabFilter />
                    <Button
                        variant="outline"
                        className="w-[50] border border-brand-primary-dark sm:hidden bg-transparent 
                        data-[state=active]:bg-brand-primary-lighter hover:bg-brand-primary-lighter"
                        onClick={() => setDisplayFilters(!displayFilters)}
                    >
                        <MdOutlineFilterAlt
                            aria-hidden='true'
                            size={18}
                            className="text-brand-primary-dark"
                        />
                    </Button>
                </div>

                {displayFilters && (
                    <>
                        <SelectFilter placeholder="Country institute" items={filtesLists.country_institute} />
                        <SelectFilter placeholder="Language" items={filtesLists.language} />
                        <SelectFilter placeholder="topic" items={filtesLists.topic} />
                        <SelectFilter placeholder="Duration" items={filtesLists.duration} />
                        <SelectFilter placeholder="Training path" items={filtesLists.training_path} />
                    </>
                )}
            </div>

        </section>
    )

}