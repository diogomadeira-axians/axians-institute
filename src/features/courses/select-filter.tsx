import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";

const SelectFilter = ({
    placeholder,
    items,
    displayFilters
}: {
    placeholder: string,
    items: Array<{ name: string; value: string }>
    displayFilters: boolean
}) => {
    return (
        <div className={cn("block", {
            "hidden sm:block": displayFilters,
        })}>

            <Select>
                <SelectTrigger className="border-brand-primary-dark bg-transparent">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {items.map(eachItem =>
                        <span key={eachItem.value}>
                            <SelectItem value={eachItem.value} id={eachItem.value}>{eachItem.name}</SelectItem>
                        </span>)}
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectFilter;
