import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CoursesFilter() {

    return (
        <section className="space-y-4 z-10 relative">
            <div className="flex gap-2">
                <Input placeholder="Search all courses" />
                <Button variant="link">Clear</Button>
                <Button>Search</Button>
            </div>

        </section>
    )

}