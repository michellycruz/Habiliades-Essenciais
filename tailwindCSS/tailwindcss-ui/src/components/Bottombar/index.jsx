import { useState } from "react";
import Button from "./Button";
import { FiEdit3, FiFileText, FiInbox, FiMenu, FiX } from "react-icons/fi";

const inlineIcon = "inline mb-1 sm:mr-2"
const smOnlyText = "hidden sm:inline"

const Bottombar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full flex gap-2 md:hidden items-center relative">
      <Button>
        <FiEdit3 className={inlineIcon} />
        <span className={smOnlyText}>Escrever</span>
      </Button>
      <Button active>
        <FiInbox className={inlineIcon} />
        <span className={smOnlyText}>Caixa de Entrada</span>
      </Button>
      <Button>
        <FiFileText className={inlineIcon} />
        <span className={smOnlyText}>Rascunhos</span>
      </Button>
      <Button onClick={() => setIsMenuOpen(state => !state)}>
        {isMenuOpen ? (
          <>
            <FiX className={inlineIcon} />
            <span className={smOnlyText}>Fechar</span>
          </>
        ) : (
          <>
            <FiMenu className={inlineIcon} />
            <span className={smOnlyText}>Mais</span>
          </>
        )}
      </Button>
    </div>
  )
}

export default Bottombar

//parei no minuto 4:29 da aula 7