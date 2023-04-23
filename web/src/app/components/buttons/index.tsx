interface IBtn {
    title: string
}

export function BtnLightBlue({ title }: IBtn) {
    return (
        <a href="#" className="button-container bg-lightBlue">{ title }</a>
    )
}

export function BtnStrongCyan({ title }: IBtn) {
    return (
        <a href="#" className="button-container bg-strongCyan">
            { title }
        </a>
    )
}