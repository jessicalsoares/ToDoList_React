import { useState } from "react"
import { CampoTexto, Botao } from "../../Components"

import style from './FormCriarTarefa.module.css'

const FormCriarTarefa = (props) => {
    const [nomeTarefa, setNomeTarefa] = useState('')
    const { setTarefas } = props

    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value)
    }


    const adicionarTarefa = () => {

    }

    return (
        <form className={style.FormCriarTarefa}>
            <CampoTexto
            value={nomeTarefa} 
            onChange={onChangeNomeTarefa} 
            />
            <Botao texto="+" />
        </form>
    )
}

export { FormCriarTarefa }