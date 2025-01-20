import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MdComputer, MdGroup } from "react-icons/md";

const TabFilter = ({}: {}) => {
    return (
        <Tabs defaultValue="account">
            <TabsList className="grid grid-cols-3 p-0 h-10 border-brand-primary-dark border rounded 
            w-full text-center bg-transparent text-brand-primary-dark">
                <TabsTrigger
                    value="all-courses"
                    className="border-r border-brand-primary-dark rounded-l rounded-r-none h-full w-full 
                    data-[state=active]:bg-brand-primary-lighter font-semibold bg-transparent"
                >
                    All courses
                </TabsTrigger>

                <TabsTrigger
                    value="remote"
                    className="border-r border-brand-primary-dark rounded-none h-full w-full 
                    data-[state=active]:bg-brand-primary-lighter font-semibold bg-transparent"
                >
                    <MdComputer aria-hidden='true' size={18} className="text-brand-primary-dark mr-1" />
                    Remote
                </TabsTrigger>

                <TabsTrigger
                    value="in-person"
                    className="border-r rounded-l-none h-full w-full
                    data-[state=active]:bg-brand-primary-lighter font-semibold bg-transparent"
                >
                    <MdGroup aria-hidden='true' size={18} className="text-brand-primary-dark mr-1" />
                        In person
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}

export default TabFilter;
