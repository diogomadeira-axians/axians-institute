import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

const SelectFilter = ({
    name,
    placeholder,
    items,
    displayFilters
}: {
    name: string,
    placeholder: string,
    items: Array<{ name: string; value: string }>
    displayFilters: boolean
}) => {

    const form = useFormContext()

    return (
        <div className={cn("block", {
            "hidden sm:block": displayFilters,
        })}>
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="border-brand-primary-dark bg-transparent">
                                    <SelectValue placeholder={placeholder} />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {items.map(eachItem =>
                                    <SelectItem key={eachItem.value} value={eachItem.value} id={eachItem.value}>{eachItem.name}</SelectItem>
                                )}
                            </SelectContent>
                        </Select>
                        {/* <FormMessage /> */}
                    </FormItem>
                )}
            />

        </div>
    )
}

export default SelectFilter;
