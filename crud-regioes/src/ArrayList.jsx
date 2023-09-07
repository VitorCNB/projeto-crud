import { ArrayItem } from "./ArrayItem"

export function ArrayList({ array, deleteArray, changeSituation }) {
  return (
    <ul className="list">
      {array.length === 0 && "Sem regiões cadastradas"}
      {array.map(array => {
        return (
          <ArrayItem
            {...array}
            key={array.id}
            deleteArray={deleteArray}
            changeSituation={changeSituation}
          />
        )
      })}
    </ul>
  )
}