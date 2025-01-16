import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TabFilter = ({
    tabsList
}: {
    tabsList: Array<{ placeholder: string; value: string }>
}) => {
    return (
        <Tabs defaultValue="account" className="w-60">
            <TabsList>
                {tabsList.map(eachTab => 
                    <span key={eachTab.value}>
                        <TabsTrigger value={eachTab.value}>{eachTab.placeholder}</TabsTrigger>
                    </span>
                )}
            </TabsList>
        </Tabs>
    )
}

export default TabFilter;
