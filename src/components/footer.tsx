import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("navbar");

    const menus = [
        { id: "home", text: t("home"), link:"/", cssClass: " md:row-span-3 md:col-span-1"},
        { id: "courses", text: t("courses"), link:"/courses", cssClass: "md:row-span-1 md:col-span-1"},
        { id: "contacts", text: t("contacts"), link:"/contacts", cssClass: "md:row-span-3 md:col-span-1"},
        { id: "remote", text: t("remote"), link:"/courses?type=remote", cssClass: "md:row-span-1 md:col-span-1"},
        { id: "inPerson", text: t("inPerson"), link:"/course?type=in-person", cssClass: "md:row-span-1 md:col-span-1"},
    ]

    return (
        <footer className="py-16 space-y-4 bg-white">
            <div className="container mx-auto gap-y-6 flex flex-col-reverse items-center md:flex-row md:items-start">
                <Image
                    className='h-14 w-32 mx-6'
                    src="axians-logo.svg"
                    alt="map"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
                
                <ul className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-x-6 gap-y-3 mx-8">
                    {menus.map(eachMenu => {
                        return(
                            <li
                                className={`text-primary font-medium text-center min-w-20 row-span-1 md:text-start ${eachMenu.cssClass}`}
                                key={eachMenu.text}
                            >
                                <Link href={eachMenu.link}>{eachMenu.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </footer>
    )
}