// eslint-disable-next-line react/prop-types
export default function WriteButton({children}){
    return(
        <button
            className="
                bg-emerald-300 hover:bg-emerald-400
                dark:bg-emerald-500 dark:hover:bg-emerald-600
                py-2 w-full rounded-lg transition-colors
            "
        >
            {children}
        </button>
    )
}