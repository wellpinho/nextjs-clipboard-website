import Image from "next/image";

interface IPathImg {
    path: string
}

export default function References() {
    const ReferenceImage = ({ path }: IPathImg) => {
        return (
            <Image
                alt=""
                width={100}
                height={100}
                src={path}
            />
        )
    }

    return (
        <section id="references">
            <div className="
                flex
                flex-col
                items-center
                justify-between
                max-w-6xl
                px-10
                mx-auto
                space-y-16
                my-44
                md:flex-row
                md:space-y-0
            ">
                <ReferenceImage path="/images/logo-google.png" />
                <ReferenceImage path="/images/logo-microsoft.png" />
                <ReferenceImage path="/images/logo-ibm.png" />
                <ReferenceImage path="/images/logo-google.png" />
                <ReferenceImage path="/images/logo-vector-graphics.png" />
            </div>
        </section>
    )
}