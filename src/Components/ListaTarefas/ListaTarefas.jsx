import { ListaTarefasItem } from "./ListaTarefasItem/ListaTarefasItem"

import style from './ListaTarefas.module.css'

const ListaTarefas = (props) => {
    const {tarefas} = props
    
    return (
        <ul className= {style.ListaTarefa}>
           {tarefas.map(item => <ListaTarefasItem key={item.id} nome={item.nome} />)}
        </ul>
    )
}

export { ListaTarefas }