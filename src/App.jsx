import { Button, Container, Input, Item } from "./styles"
import styles from "./App.module.css"
import Delete from '@mui/icons-material/DeleteForever';
import Check from '@mui/icons-material/CheckCircleOutline';
import { useState } from "react";

export default function App() {

  const [tarefa, setTarefa] = useState('');
  const [listTarefas, setListTarefas] = useState([]);

  const addTarefa = () => {
    if (!tarefa) return alert('Escreva uma tarefa');
    const novaTarefa = {
      id: Math.random(),
      tarefa: tarefa,
      checked: false,
    }
    setListTarefas([...listTarefas, novaTarefa]);
    setTarefa('');
  }

  const removerTarefa = (id) => {
    const novaLista = listTarefas.filter(tarefa => tarefa.id !== id);
    setListTarefas(novaLista);
  }

  const concluido = (id, checked) => {

    const index = listTarefas.findIndex((tarefa) => tarefa.id === id);
    const newList = listTarefas
    newList[index].checked = !checked;
    setListTarefas([...newList]);
  }

  return (
    <Container>
      <h1 className={styles.title}>To Do List</h1>
      <div className={styles.container}>
        <Input
          value={tarefa}
          placeholder="Digite sua tarefa!!!"
          onChange={(e) => setTarefa(e.target.value)}
        />
        <Button onClick={addTarefa} >Adicionar</Button>
      </div>
      <div>
        <ul>
          {listTarefas.map((tarefa) => (
            <>
              <Item checked={tarefa.checked} key={tarefa.id}>
                <p>{tarefa.tarefa}</p>
                <div>
                  <button onClick={() => removerTarefa(tarefa.id)}><Delete /></button>
                  <button onClick={() => concluido(tarefa.id, tarefa.checked)} ><Check /></button>
                </div>
              </Item>
            </>
          ))}
        </ul>
      </div>
    </Container>
  )
}