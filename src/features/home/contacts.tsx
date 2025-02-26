import ContactCard from "@/components/contactCard";
import { Card, CardContent } from "@/components/ui/card";
import { MdGroup } from "react-icons/md";

export default function Contacts() {

    return (
        <section className="space-y-4 z-10 relative">
            <div className="flex gap-2 items-center">
                <div className="w-9 h-9 rounded-full border border-brand-primary-dark flex justify-center items-center">
                    <MdGroup aria-hidden='true' size={18} className="text-brand-primary-dark" />
                </div>
                <h2 className="h2">Contacts</h2>
            </div>

            <Card className="bg-background border">
                <CardContent className="flex flex-wrap justify-between items-center">
                    <p>Got a training to register of any specific request?</p>
                    <a href="#" className="font-medium text-brand-primary-main dark:text-brand-primary-dark hover:underline">Access all contacts</a>
                </CardContent>
            </Card>

            <div className="space-y-6">
                {Array.from({ length: 3 }).map((_, index) => (
                    <ContactCard key={index} />
                ))}
            </div>

        </section>
    )

}