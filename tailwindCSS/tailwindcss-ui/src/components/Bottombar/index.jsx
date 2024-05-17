import { FiEdit3 } from "react-icons/fi";
import Button from "./Button";

const inlineIcon = "inline mb-1 sm:mr-2"
const smOnlyText = "hidden "

export default function Bottombar() {
    return (
        <div>
            <Button>
                <FiEdit3 className={inlineIcon} />
                <span className={smOnlyText}>Escrever</span>
            </Button>
        </div>
    )
}

//parei no minuto 4:29 da aula 7