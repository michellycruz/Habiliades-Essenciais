import WriteButton from "./WriteButton";
import { FiEdit3 } from "react-icons/fi";
import Button from "./Button";

export default function Sidebar(){
    return(
        <aside className="flex flex-col">
            <WriteButton>
                <FiEdit3 className="inline mr-1 mb-1" />Escrever
            </WriteButton>
            <Button>Caixa de Entrada</Button>
            <Button>Enviados</Button>
            <Button>Rascunhos</Button>
            <Button>Arquivados</Button>
            <Button>Spam</Button>
            <Button>Lixeira</Button>
        </aside>
    )
}

//parei no minuto 21:31 da aula 6