//parei no minuto 12 da aula 5
import { FiSearch } from "react-icons/fi"

export default function SearchForm(){
    return(
        <form
            className="min-w-0 flex-grow flex"
            onSubmit={(ev) => ev.preventDefault()}
        >
            <input 
                className="
                    min-w-0 w-full p-2 rounded-l-lg border-2 border-transparent
                    bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50
                    focus:outline-none
                "
                type="text"
                placeholder="Pesquisar..."
            />
            <button>
                <FiSearch />
            </button>
        </form>
    )
}