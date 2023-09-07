import { useState } from "react"

export function Form({onSubmit}){

    const [region, setRegion] = useState("")
    const [uf, setUf] = useState("Selecionar")

    function handleSubmit(e){
        e.preventDefault()
        if (region==="" && uf==="Selecionar"){ 
          console.error("selecione uma UF e Insira uma região!")
        } else if (region===""){ 
          console.error("Insira uma região!")         
        } else if (uf==="Selecionar"){
          console.error("selecione uma UF")
        }else {
          onSubmit(uf, region)
          setUf("Selecionar")
          setRegion("")
          
        }
    }
    
    return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <label> UF: </label>
          <select value={uf} onChange={e => setUf(e.target.value)} id="uf" required>
            <option value="Selecionar">Selecionar</option>
            <option value="Acre">Acre</option>      
            <option value="Alagoas">Alagoas</option>
            <option value="Amapá">Amapa</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Bahia">Bahia</option>
            <option value="Ceará">Ceara</option>
            <option value="Distrito Federal"> Distrito Federal</option>
            <option value="Espírito Santo">Espirito Santo</option>
            <option value="Goiás">Goias</option>
            <option value="Maranhão">Maranhao</option>
            <option value="Mato Grosso">Mato Grosso</option>
            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
            <option value="Minas Gerais">Minas Gerais</option>
            <option value="Pará">Para</option>
            <option value="Paraíba">Paraiba</option>
            <option value="Paraná">Parana</option>
            <option value="Pernambuco">Pernambuco</option>
            <option value="Piauí">Piaui</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
            <option value="Rondônia">Rondonia</option>
            <option value="Roraima">Roraima</option>
            <option value="Santa Catarina">Santa Catarina</option>
            <option value="São Paulo">Sao Paulo</option>
            <option value="Sergipe">Sergipe</option>
            <option value="Tocantins">Tocantins</option>
          </select>

        <label> Região: </label>
        <input type="text" value={region} onChange={e => setRegion(e.target.value)} id="region" required/>

        <button className="btn">Inserir</button>
      </form> 
          );
        }