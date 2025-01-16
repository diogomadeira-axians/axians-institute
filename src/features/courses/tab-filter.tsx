import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TabFilter = ({
    tabsList
}: {
    tabsList: Array<{ placeholder: string; value: string }>
}) => {
    return (
        <Tabs defaultValue="account" className="max-w-[384]">
            <TabsList className="grid grid-cols-3 p-0 h-10 bg-transparent border-brand-primary-dark border rounded w-full">
                {tabsList.map(eachTab => 
                    <span 
                        key={eachTab.value} 
                        className="text-center border-r border-brand-primary-dark last:border-0 h-full"
                    >
                        {
                            //active pseudo-element is not working
                        }
                        <TabsTrigger value={eachTab.value} className="h-full w-full rounded active:bg-blue-100">
                            {eachTab.placeholder}
                        </TabsTrigger>
                    </span>
                )}
            </TabsList>
        </Tabs>
    )
}

export default TabFilter;
