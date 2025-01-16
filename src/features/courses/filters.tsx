import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SelectFilter from "@/features/courses/select-filter"
import TabFilter from "@/features/courses/tab-filter"


export default function CoursesFilter() {

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
        <section className="space-y-4 z-10 relative">
            <div className="flex gap-2">
                <Input placeholder="Search all courses" />
                <Button variant="link">Clear</Button>
                <Button>Search</Button>
            </div>

            <div>
                <TabFilter tabsList={tabsList} />

                {selectFiltesList.map(eachSelectFilter => {
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