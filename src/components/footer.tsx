import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("navbar");

    const menus = [
        { id: "home", text: t("home"), link:"/", cssClass: "row-span-3 col-span-1"},
        { id: "courses", text: t("courses"), link:"/courses", cssClass: "row-span-1 col-span-1"},
        { id: "contacts", text: t("contacts"), link:"/contacts", cssClass: "row-span-3 col-span-1"},
        { id: "remote", text: t("remote"), link:"/courses?type=remote", cssClass: "row-span-1 col-span-1"},
        { id: "inPerson", text: t("inPerson"), link:"/course?type=in-person", cssClass: "row-span- col-span-1"},
    ]

    return (
        <footer className="py-16 space-y-4 bg-white">
            <div className="container mx-auto flex">
                <Image
                    className='h-auto w-32'
                    src="axians-logo.svg"
                    alt="map"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
                
                <ul className="grid grid-cols-3 grid-rows-3 gap-x-5 gap-y-3 mx-8">
                    {menus.map(eachMenu => {
                        return(
                            <li
                                className={`text-primary font-medium ${eachMenu.cssClass}`}
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