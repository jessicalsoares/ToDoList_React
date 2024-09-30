import { TIPO_BOTAO } from './constants'

import style from './Botao.module.css'

const Botao = (props) => {
    const { texto, tipo = TIPO_BOTAO.PRIMARIO, ...Outrasprops } = props

    return (
        <button className={style.Botao} tipo={tipo} {...Outrasprops}>
            { texto }
        </button>
    )
}

export { Botao }