import Image from "next/image";

export default function Anywhere() {
    return (
        <section id="access">
            <div className="section-container my-20">
                <h3>Access Clipboard Anywhere</h3>
                <p className="text-center">
                    Whether you&apos;re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
                </p>
                <Image 
                    src="/images/image-devices.png" 
                    alt="" 
                    width={500} 
                    height={500} 
                    className="mx-auto" 
                />
            </div>
        </section>
    )
}