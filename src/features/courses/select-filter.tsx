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
            <SelectTrigger className="w-60">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {items.map(eachItem => <SelectItem value={eachItem.value} id={eachItem.value}>{eachItem.name}</SelectItem>)}
            </SelectContent>
        </Select>
    )
}

export default SelectFilter;
