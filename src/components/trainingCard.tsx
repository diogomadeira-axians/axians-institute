import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";

export default function TrainingCard() {
    return (
        <Card>
            <CardHeader className="space-y-3 mb-3">
                <CardTitle className="mb-5">Welcome to Axians</CardTitle>

                <div className="gap-2 flex">
                    <Badge variant="default">Badge</Badge>
                    <Badge variant="default">Badge</Badge>
                    <Badge variant="default">Badge</Badge>
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