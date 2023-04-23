import Image from "next/image";

interface IComponent {
    title: string
    image: string
    description: string
}

export default function Supercharge() {
    const ItemComponent = ({title, image, description}: IComponent) => {
        return (
            <div className="flex flex-col items-center space-y-5">
                <Image src={image} alt="" width={50} height={50} />
                <h5>{ title }</h5>
                <p>{ description }</p>
            </div>
        )
    }

    return (
        <section id="supercharge">
            <div className="section-container my-20">
                <h3>Supercharge your workflow</h3>
                <p className="text-center mb-16">
                    We&apos;ve got the tools to boost your productivity.
                </p>

                <div className="
                    flex 
                    flex-col 
                    items-center 
                    justify-between 
                    space-y-16 
                    md:flex-row 
                    md:space-y-0 
                    md:space-x-12
                ">  
                    <ItemComponent
                        title="Create Blacklist"
                        image="/images/icon-blacklist.svg"
                        description="Easily search your snippets by content, category, web, address, application and more."
                    />
                    <ItemComponent
                        title="Plain Text Snippets"
                        image="/images/icon-text.svg"
                        description="Remove unwanted formmating from copied text for a consistent look"
                    />
                    <ItemComponent
                        title="Sneak Preview"
                        image="/images/icon-preview.svg"
                        description="Quick preview of all snippets on your clipboard for easy access."
                    />
                </div>
            </div>
        </section>
    )
}