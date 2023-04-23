import Image from "next/image";
import { BtnLightBlue, BtnStrongCyan } from "../buttons";

interface IMenu {
    title?: string
    url: string
    link?: string
}
export default function Footer() {
    const Menu = ({ title, url }: IMenu) => {
        return (
            <div>
                <a href={url} className="hover:text-strongCyan">{ title }</a>
            </div>
        )
    }

    const SocialIcon = ({ url, link }: IMenu) => {
        return (
            <a href={link}>
                <Image src={url} alt="" width={30} height={30} className="ficon" />
            </a>
        )
    }

    return (
        <footer id="footer">
            <div className="section-container">
                <h3>Clipboard for IOS and MacOs</h3>
                <p>
                    Avaliable for tree on the App Store. Download for Mac or IOS,
                    sync with iCloud and you&apos;re ready to start adding to your clipboard.
                </p>
                <div className="button-box">
                    <BtnStrongCyan title="Download for Mac" />
                    <BtnLightBlue title="Download for IOS" />
                </div>
            </div>

            <div className="section-container m-20">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <Image src="/images/logo.svg" alt="" width={50} height={50} />
                    <div className="
                        flex 
                        flex-col 
                        items-center 
                        justify-between 
                        flex-1 
                        mb-10 
                        space-y-6 
                        md:flex-row 
                        md:mb-0 
                        md:space-y-0 
                        text-grayIsBlue
                    ">
                        <div className="footer-card">
                            <div className="footer-card-content">
                                <Menu title="FAQs" url="#" />
                                <Menu title="Contact Us" url="#" />
                            </div>
                        </div>

                        <div className="footer-card">
                            <div className="footer-card-content">
                                <Menu title="Privacy Policy" url="#"/>
                                <Menu title="Press Kit" url="#" />
                            </div>
                        </div>

                        <div className="footer-card">
                            <div className="footer-card-content">
                                <Menu title="Install Guide" url="#"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <div className="flex justify-between w-32 py-1">
                        <SocialIcon 
                            url="/images/icon-twitter.svg"
                            link="https://www.linkedin.com/in/wellpinho/"
                        />
                        <SocialIcon 
                            url="/images/icon-facebook.svg"
                            link="https://www.linkedin.com/in/wellpinho/"
                        />
                        <SocialIcon 
                            url="/images/icon-instagram.svg"
                            link="https://www.linkedin.com/in/wellpinho/" 
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}