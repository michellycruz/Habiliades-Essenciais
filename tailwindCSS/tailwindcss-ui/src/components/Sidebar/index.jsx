import WriteButton from "./WriteButton";
import { FiEdit3, FiSend, FiInbox, FiFileText, FiTrash2, FiAlertOctagon, FiArchive } from "react-icons/fi";
import Button from "./Button";
const inlineIcon = "inline mr-1 mb-1"

export default function Sidebar(){
    return(
        <aside className="hidden md:flex flex-col items-start gap-2 grow-0 shrink basis-48">
            <WriteButton>
                <FiEdit3 className={inlineIcon} />Escrever
            </WriteButton>
            <Button active>
                <FiInbox className={inlineIcon}/>    Caixa de Entrada
            </Button>
            <Button>
               <FiSend className={inlineIcon} /> Enviados
            </Button>
            <Button>
               <FiFileText className={inlineIcon} /> Rascunhos
            </Button>
            <Button>
               <FiArchive className={inlineIcon} /> Arquivados
            </Button>
            <Button>
               <FiAlertOctagon className={inlineIcon} /> Spam
            </Button>
            <Button>
                <FiTrash2  className={inlineIcon} /> Lixeira
            </Button>
        </aside>
    )
}

//parei no minuto 21:31 da aula 6