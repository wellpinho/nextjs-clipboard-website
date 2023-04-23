import Image from "next/image";

export default function Header() {
    return (
        <section id="hero">
            <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
                <Image src="/images/logo.svg" alt="" width={125} height={125} className="mx-auto my-16" />

                <h3 className="mb-8 text-4xl font-bold text-darkGrayIsBlue md:text-5xl">
                    A history of everything you copy
                </h3>

                <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayIsBlue">
                    Clipboard allows you to back and organize everyhing you copy.
                    Instantly access your clipboard on all your devices.
                </p>

                <div className="
                    flex 
                    flex-col 
                    justify-center 
                    w-full 
                    space-y-6 
                    text-xl 
                    text-lightWhite
                    md:flex-row 
                    md:space-y-0
                    md:space-x-4
                ">
                    <a href="#" className="
                    p-4 px-8 
                    rounded-full 
                    shadow-lg 
                    bg-strongCyan 
                    duration-200 
                    hover:opacity-80
                ">Download for IOS</a>
                    <a href="#" className="
                    p-4 px-8 
                    rounded-full 
                    shadow-lg 
                    bg-lightBlue
                    duration-200 
                    hover:opacity-80
                ">Download for Mac</a>
                </div>
            </div>
        </section>
    )
}