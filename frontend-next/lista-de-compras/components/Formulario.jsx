import styles from '../styles/Formulario.module.css'

export default function Formulario(){
  return(
  <>
    <form action="" className={styles.container}>
      <label htmlFor="name">Nome do Produto </label>
      <input type="text" id='name' name='name'/>
      <label htmlFor="categoria">Categoria</label>
      <input type="color" id='categoria' name='categoria'/>
      <label htmlFor="prioridade">Prioridade de compra</label>
      <input type="text" id='prioridade' name='prioridade'/>      
      <label htmlFor="price">Preço do Produto</label>
      <input type="number" id='price' name='price'/>      
      <label htmlFor="description">Descrição </label>
      <input type="text" id='description'  name ='description'/>
    </form>
  </>  
  )
}