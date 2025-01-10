import Image from "next/image";

export default function ContactCard() {
    return (
        <div className="flex gap-4">
            <Image
                className='h-20 w-20 rounded-full object-cover'
                src="/img/remote-courses.png"
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
            />

            <div className="bg-[#EBF3F9] w-full rounded-sm py-4 px-6">
                <p>Henk Bruggeman</p>
            </div>


            {/* <Button>Access</Button>
            <a href="#" className="font-medium text-brand-primary-main dark:text-brand-primary-dark hover:underline">Contact our team</a> */}
        </div >
    )
}