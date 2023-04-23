import Image from "next/image";

interface IComponent {
    title: string
    description: string
}

export default function Features() {
    const ComponentItem = ({ title, description }: IComponent) => {
        return (
            <>
                <h5>{ title }</h5>
                <p>{ description }</p>
            </>
        )
    }
    return (
        <section id="features">
            <div className="
                section-container
                my-20
            ">
                <div className="flex flex-col md:flex-row md:space-x-32">
                    <div className="relative md:w-1/2">
                        <Image 
                            className="
                                md:absolute
                                top-20
                                right-[50%]
                            " 
                            src="/images/image-computer.png"
                            width={500}
                            height={500}
                            alt="" />
                    </div>

                    <div className="
                        flex 
                        flex-col 
                        mt-16 
                        mb-24 
                        space-y-12 
                        text-xl 
                        md:w-1/2
                        md:mb-60 
                        md:text-left 
                        md:pl-16
                    ">
                        <div>
                            <ComponentItem 
                                title="Quick Search"
                                description="Easily search your snippets by content, category, web, address, application and more."
                            />
                            <ComponentItem 
                                title="iCloud Sync"
                                description="Instantly saves and syncs snippets across all your devices."
                            />
                            <ComponentItem 
                                title="Completely History"
                                description="Retries any snippets from the first moment you started using the app."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}