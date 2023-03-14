import { Button, Container, Input } from "./styles"
import styles from "./App.module.css"

export default function App() {
  return (
    <Container>
      <h1 className={styles.title}>To Do List</h1>
    <div className={styles.container}>
      <Input placeholder="Digite sua tarefa" />
      <Button>Adicionar</Button>
      </div>
    </Container>
  )
}