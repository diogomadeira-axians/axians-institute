import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SelectFilter from "@/features/courses/select-filter"

export default function CoursesFilter() {

    return (
        <section className="space-y-4 z-10 relative">
            <div className="flex gap-2">
                <Input placeholder="Search all courses" />
                <Button variant="link">Clear</Button>
                <Button>Search</Button>
            </div>

            <div>
                <SelectFilter placeholder="topic" items={[{name: "Value 1", value: "Value 1"}, {name: "Value 2", value: "Value 2"}]} />
            </div>

        </section>
    )

}