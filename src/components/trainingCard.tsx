import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { MdComputer, MdGroup, MdLocationOn, MdRecordVoiceOver, MdSchedule } from "react-icons/md";
import { formatDuration } from "@/utils/duration";
import Link from "next/link";
import { Modality } from "@/types/training";

const modalitySwitch = (modality: Modality) => {
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
    duration,
    description,
    institute,
    href
}: {
    title: string
    modality: "Remote" | "Classroom",
    defaultLanguage: string,
    duration: number,
    description: string,
    institute: string,
    href: string
}) {
    return (
        <Card>
            <div className="h-full flex flex-col justify-between">
                <div>
                    <CardHeader className="space-y-3 mb-3">
                        <CardTitle className="mb-4">{title}</CardTitle>

                        <div className="flex items-center gap-1 text-brand-primary-main">
                            <MdLocationOn aria-hidden='true' size={15} />
                            <span className="text-xs">{institute}</span>
                        </div>

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
                    <CardContent className="flex flex-col items-start space-y-2">
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

                        <div className="max-h-40 h-full overflow-hidden relative">
                            <div className="bg-gradient-to-t from-white absolute w-full h-full max-h-20 bottom-0"></div>
                            {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
                        </div>
                    </CardContent>
                </div>
                <CardFooter className="flex flex-col justify-between items-start">
                    {href && <Button asChild>
                        <Link href={href} target="_blank">
                            Access
                        </Link>
                    </Button>}


                    <Button variant="link">Contact our team</Button>
                </CardFooter>
            </div>
        </Card>
    )
}