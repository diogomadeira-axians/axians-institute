"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SelectFilter from "@/features/courses/select-filter"
import TabFilter from "@/features/courses/tab-filter"
import { useState } from "react";
import { MdOutlineFilterAlt } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FormFiltersSchema, FormFiltersSchemaType } from "./schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";



export default function CoursesFilter() {
    const [displayFilters, setDisplayFilters] = useState(true)

    const filtersLists = {
        country_institute: [{ name: "Value 1", value: "Value 1" }, { name: "Value 2", value: "Value 2" }],
        language: [{ name: "Value 1", value: "Value 1" }, { name: "Value 2", value: "Value 2" }],
        topic: [{ name: "Value 1", value: "Value 1" }, { name: "Value 2", value: "Value 2" }],
        duration: [{ name: "Value 1", value: "Value 1" }, { name: "Value 2", value: "Value 2" }],
        training_path: [{ name: "Value 1", value: "Value 1" }, { name: "Value 2", value: "Value 2" }],
    }



    const form = useForm<FormFiltersSchemaType>({
        resolver: zodResolver(FormFiltersSchema),
        defaultValues: {
            search: "",
            countryInstitute: "",
            language: "",
            topic: "",
            duration: "",
            trainingPath: "",
        },
    })

    const onSubmit = (data: FormFiltersSchemaType) => {
        console.log("🚀 ~ onSubmit ~ data:", data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <section className="space-y-4 container mx-auto">
                    <div className="flex gap-2">
                        <FormField
                            control={form.control}
                            name="search"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Search all courses" className="border-brand-primary-dark bg-transparent" {...field} />
                                    </FormControl>
                                    {/* <FormMessage /> */}
                                </FormItem>
                            )}
                        />
                        <Button variant="link" className="w-16">Clear</Button>
                        <Button type="submit"
                        // disabled={!form.watch("search")}
                        >Search</Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex justify-between gap-5 md:block">
                            <TabFilter />
                            <Button
                                variant="outline"
                                className="w-[50] border border-brand-primary-dark sm:hidden bg-transparent 
                        data-[state=active]:bg-brand-primary-lighter hover:bg-brand-primary-lighter"
                                onClick={() => setDisplayFilters(!displayFilters)}
                            >
                                <MdOutlineFilterAlt
                                    aria-hidden='true'
                                    size={18}
                                    className="text-brand-primary-dark"
                                />
                            </Button>
                        </div>

                        <SelectFilter name="countryInstitute" placeholder="Country institute" items={filtersLists.country_institute} displayFilters={displayFilters} />
                        <SelectFilter name="language" placeholder="Language" items={filtersLists.language} displayFilters={displayFilters} />
                        <SelectFilter name="topic" placeholder="Topic" items={filtersLists.topic} displayFilters={displayFilters} />
                        <SelectFilter name="duration" placeholder="Duration" items={filtersLists.duration} displayFilters={displayFilters} />
                        <SelectFilter name="trainingPath" placeholder="Training path" items={filtersLists.training_path} displayFilters={displayFilters} />
                    </div>

                </section>
            </form>
        </Form>
    )

}