import Logo from "./Logo"
import Avatar from "./Avatar"

export default function Header(){
    return(
        <header
            className="
                px-4 h-16
                flex items-center justify-between
                gap-6
                bg-zinc-100 dark:bg-zinc-800
            "
        >
            <Logo />
            <div>pesquisa</div>
            <Avatar />
        </header>
    )
}