import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from "next/image";
import { MdComputer } from "react-icons/md";

const coursesTypes = ({
    title,
    description,
    image,
    href,
    hrefText
}: {
    title: string,
    description: string,
    image: string,
    href: string,
    hrefText: string
}) => {
    return (
        <div className="space-y-4 z-10">
            <div className="flex gap-2 items-center">
                <div className="w-9 h-9 rounded-full border border-brand-primary-dark flex justify-center items-center">
                    <MdComputer aria-hidden='true' size={18} className="text-brand-primary-dark" />
                </div>
                <h1 className="h1">{title}</h1>
            </div>
            <Card className="bg-background border">
                <CardContent>
                    <div className="flex gap-3">
                        <Image className='h-28 w-28 rounded-sm' src={image} alt={title} width={0} height={0} sizes="100vw" />
                        <div>
                            <p className="mb-3">{description}</p>
                            <a href={href} className="font-medium text-brand-primary-main dark:text-brand-primary-dark hover:underline">{hrefText}</a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default function HeroSection() {

    const t = useTranslations("pages.home");

    return (
        <section className="w-full space-y-8">
            <div className="flex justify-between">
                <div className="space-y-8">
                    <div>
                        <span className="font-tahu text-5xl text-brand-secondary-main">{t("heroSection.improveYourself")}</span>
                    </div>
                    <p>{t("heroSection.description")}</p>
                    <p className="font-vinci-sans-medium">{t("heroSection.goals")}</p>
                    <p>{t("heroSection.goalsDescription")}</p>
                </div>
                <div>
                    <Image className='h-auto w-full rounded-full scale-x-[-1] max-h-96' src="/img/hero-section.png" alt="hero-section" width={0} height={0} sizes="100vw" />
                </div>
            </div>
            <div className="flex gap-2">
                <Input placeholder="Search all courses" />
                <Button>Search</Button>
            </div>

            <div>
                <span>What you will be able to find here</span>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    {coursesTypes({
                        title: "Remote courses",
                        description: "Our remote courses platform connects learners all around the world.​ This collaborative space offers everyone the opportunity to acquire technical basics, improve skills in a certain expertise, strengthen competencies in innovative areas, share local knowledge and even review the security principles specific to Axians' activities.",
                        image: "/img/remote-courses.png",
                        href: "#",
                        hrefText: "Access remote courses"
                    })}
                    {coursesTypes({
                        title: "In person courses",
                        description: "Axians Institute training centers offer the opportunity to maintain acquired skills at the highest level on all subjects related to all of the Axians expertise. Each of the centers can draw on the strength of the network and benefit from the knowledge and skills held by another. They regularly share their respective approaches and pedagogical experiences with each other to enrich themselves mutually.​​",
                        image: "/img/in-person-courses.png",
                        href: "#",
                        hrefText: "Access in person courses"
                    })}
                </div>
            </div>
        </section>
    )
}