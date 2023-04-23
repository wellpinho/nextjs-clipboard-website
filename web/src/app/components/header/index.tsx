import Image from "next/image";
import { BtnLightBlue, BtnStrongCyan } from "../buttons";

export default function Header() {
    return (
        <section id="hero">
            <div className="section-container mb-40 pt-16">
                <Image src="/images/logo.svg" alt="" width={125} height={125} className="mx-auto my-16" />

                <h3>A history of everything you copy</h3>
                <p>
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
                    <BtnStrongCyan title="Download for IOS" />
                    <BtnLightBlue title="Download for Mac" />
                </div>
            </div>
        </section>
    )
}