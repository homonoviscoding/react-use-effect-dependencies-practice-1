import { useState, useEffect } from "react"
import DataList from "./components/DataList.jsx"
import SelectTypeForm from "./components/SelectTypeForm.jsx"
import "./App.css"

export default function App() {
  const [dataType, setDataType] = useState("")

  const [data, setData] = useState(null)

  console.log({ data })

  // Write code here.
  //
  useEffect(() => {
    if (dataType === '') {
      setData(null)
        return
    }

    
    fetch(`https://swapi.dev/api/${dataType}/`)
      .then(response => response.json())
      .then(setData)
      return
    

    
  }, [dataType]) // watch the selectedOption state and if it changes at any time, run this useEffect


  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
