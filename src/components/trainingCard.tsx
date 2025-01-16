import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { MdComputer, MdGroup, MdRecordVoiceOver, MdSchedule } from "react-icons/md";
import { formatDuration } from "@/utils/duration";

const modalitySwitch = (modality: "Remote" | "Classroom") => {
    switch (modality) {
        case 'Remote':
            return (
                <Badge variant="default">
                    <MdComputer aria-hidden='true' size={18} className="text-brand-primary-dark mr-1" />
                    {modality}
                </Badge>
            );
        case 'Classroom':
            return (
                <Badge variant="default">
                    <MdGroup aria-hidden='true' size={18} className="text-brand-primary-dark mr-1" />
                    In person
                </Badge>
            );
        default:
            return null;
    }
}

export default function TrainingCard({
    title,
    modality,
    defaultLanguage,
    duration
}: {
    title: string
    modality: "Remote" | "Classroom",
    defaultLanguage: string,
    duration: number
}) {
    return (
        <Card>
            <CardHeader className="space-y-3 mb-3">
                <CardTitle className="mb-5">{title}</CardTitle>

                <div className="gap-2 flex">
                    <Badge variant="default">
                        <MdRecordVoiceOver aria-hidden='true' size={18} className="text-brand-primary-dark mr-1" />
                        {defaultLanguage}
                    </Badge>
                    <Badge variant="default">
                        <MdSchedule aria-hidden='true' size={18} className="text-brand-primary-dark mr-1" />
                        {formatDuration(duration)}
                    </Badge>
                    {modalitySwitch(modality)}
                </div>

            </CardHeader>
            <CardContent className="flex flex-col items-start space-y-3">
                <AspectRatio ratio={16 / 9}>
                    <Image
                        className='h-full w-full rounded-sm object-cover'
                        src="/img/remote-courses.png"
                        alt="img"
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                </AspectRatio>

                <p>This e-learning explains why Green+ is an useful tool to estimate the CO2 emissions of Axians projects, to identify the main sources and propose alternative solutions to our clients.</p>

                <Button>Access</Button>
                <a href="#" className="font-medium text-brand-primary-main dark:text-brand-primary-dark hover:underline">Contact our team</a>
            </CardContent>
        </Card>
    )
}