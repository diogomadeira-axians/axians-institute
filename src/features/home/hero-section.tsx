import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {

    const t = useTranslations("pages.home");

    return (
        <div className="flex w-full justify-between p-16">
            <div className="space-y-8">
                <div>
                    <span className="font-tahu text-5xl text-brand-secondary-main">{t("heroSection.improveYourself")}</span>
                </div>
                <p>{t("heroSection.description")}</p>
                <p className="font-vinci-sans-medium">{t("heroSection.goals")}</p>
                <p>{t("heroSection.goalsDescription")}</p>
            </div>
            <div>
                <Image className='h-auto w-full rounded-full scale-x-[-1]' src="/img/hero-section.png" alt="map" width={0} height={0} sizes="100vw" />
            </div>
        </div>
    )
}