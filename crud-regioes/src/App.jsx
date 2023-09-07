import { Form } from "./Form"
import { useState } from "react"
import { ArrayList } from "./ArrayList"
import "./Style.css"

function App() {
  const [array, setArray] = useState([])

  function addArray(uf, region){
    setArray(currentArray => {
      return [
        ...currentArray,
        { id: crypto.randomUUID(), uf, region, situation : false },
      ]
    })
  }

  function deleteArray(id) {
    setArray(currentArray => {
      return currentArray.filter(array => array.id !== id)
    })
  }

  function changeSituation(array) {
    if (array.situation){
      setArray.situation(false)
    } else {
      setArray.situation(true)
    }
  }

  return (
    <>
      <h1 className="title">Cadastro de Regiões</h1>
      <Form onSubmit={addArray}/>
      <h2 className="header">Regiões Cadastradas:</h2>
      <ArrayList array={array} deleteArray={deleteArray} changeSituation={changeSituation}/>
    </>
  )
}

export default App