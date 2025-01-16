import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SelectFilter from "@/features/courses/select-filter"
import TabFilter from "@/features/courses/tab-filter"
import { useState } from "react";

export default function CoursesFilter() {
    // Get window width to set initial filter state: if Mobile - false, if Desktop: true
    const [displayFilters, setDisplayFilters] = useState(window.innerWidth >= 640)

    const selectFiltesList = [
        { 
            id:"country-institute",
            placeholder:"Country institute",
            items: [{name: "Value 1", value: "Value 1"}, {name: "Value 2", value: "Value 2"}],
        },
        { 
            id:"language",
            placeholder:"Language",
            items: [{name: "Value 1", value: "Value 1"}, {name: "Value 2", value: "Value 2"}],
        },
        { 
            id:"topic",
            placeholder:"topic",
            items: [{name: "Value 1", value: "Value 1"}, {name: "Value 2", value: "Value 2"}],
        },
        { 
            id:"duration",
            placeholder:"Duration",
            items: [{name: "Value 1", value: "Value 1"}, {name: "Value 2", value: "Value 2"}],
        },
        { 
            id:"training-path",
            placeholder:"Training path",
            items: [{name: "Value 1", value: "Value 1"}, {name: "Value 2", value: "Value 2"}],
        }
    ]

    const tabsList = [
        { value: "all-courses", placeholder: "All courses"},
        { value: "remote", placeholder: "Remote"},
        { value: "in-person", placeholder: "In person"},
    ]

    return (
        <section className="space-y-4 z-10 relative mx-5 md:m-0">
            <div className="flex gap-2">
                <Input placeholder="Search all courses" className="border-brand-primary-dark"/>
                <Button variant="link" className="w-16">Clear</Button>
                <Button>Search</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex justify-between gap-5 md:block">
                    <TabFilter tabsList={tabsList} />
                    { window.innerWidth <= 640 && 
                        <Button className="w-1 md:hidden" onClick={() => setDisplayFilters(!displayFilters)}>X</Button>
                    }
                </div>

                {displayFilters && selectFiltesList.map(eachSelectFilter => {
                    return (
                        <div key={eachSelectFilter.id}>
                            <SelectFilter placeholder={eachSelectFilter.placeholder} items={eachSelectFilter.items} /> 
                        </div>
                    )
                })}
            </div>

        </section>
    )

}