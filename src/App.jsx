import { Button, Container, Input, Item } from "./styles"
import styles from "./App.module.css"

export default function App() {
  return (
    <Container>
      <h1 className={styles.title}>To Do List</h1>
    <div className={styles.container}>
      <Input placeholder="Digite sua tarefa" />
      <Button>Adicionar</Button>
      </div>
      <div>
        <ul>
          <Item>Estudar React js</Item>
          <Item>Estudar React js</Item>
          <Item>Estudar React js</Item>
          <Item>Estudar React js</Item>
          <Item>Estudar React js</Item>

        </ul>
      </div>
    </Container>
  )
}