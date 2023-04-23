interface IBtn {
    title: string
}

export function BtnLightBlue({ title }: IBtn) {
    return (
        <a href="#" className="
            p-4 px-8 
            rounded-full 
            shadow-lg 
            bg-lightBlue
            duration-200 
            hover:opacity-80
        ">{ title }</a>
    )
}

export function BtnStrongCyan({ title }: IBtn) {
    return (
        <a href="#" className="
            p-4 px-8 
            rounded-full 
            shadow-lg 
            bg-strongCyan 
            duration-200 
            hover:opacity-80
        ">
            { title }
        </a>
    )
}