// eslint-disable-next-line react/prop-types
export default function Button({ active, children }){
    const backgroundColor = active ? "bg-zinc-200 dark:bg-zinc-900" : ""
    return (
        <button
            className= {`
                 py-2 px-4 w-full text-left rounded-lg 
                 ${backgroundColor} transition-colors
                 hover:bg-zinc-200 dark:hover:bg-zinc-900
                `}
        >
            {children}
        </button>
    )
}