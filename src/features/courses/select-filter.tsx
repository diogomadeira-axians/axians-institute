import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const SelectFilter = ({
    placeholder,
    items,
}: {
    placeholder: string,
    items:  Array<{ name: string; value: string }>
}) => {
    return (
        <Select>
            <SelectTrigger className="border-brand-primary-dark">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {items.map(eachItem => 
                    <span key={eachItem.value}>
                        <SelectItem value={eachItem.value} id={eachItem.value}>{eachItem.name}</SelectItem>
                    </span>)}
            </SelectContent>
        </Select>
    )
}

export default SelectFilter;
