export function ArrayItem({ id, deleteArray, uf, region, situation, array}) {
  return (
    <li>

      <label>
        UF:
        {uf}
      </label>

     <div> 
      <label>
        Região:
        {region}
      </label>

      <label>
          Situação: 
          {situation ? 'Ativado' : 'Inativado'}
        </label>

      <button onClick={() => deleteArray(id)}>
        Deletar
      </button>

      <button onClick={() => changeSituation(array)}>
        {situation ? 'Inativar' : 'Ativar'}
      </button>

     </div> 

    </li>
  )
}