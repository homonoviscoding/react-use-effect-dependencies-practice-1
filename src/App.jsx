import { useState, useEffect } from "react"
import DataList from "./components/DataList.jsx"
import SelectTypeForm from "./components/SelectTypeForm.jsx"
import "./App.css"

export default function App() {
  const [dataType, setDataType] = useState("")

  const [data, setData] = useState(null)

  console.log(typeof(data))

  // Write code here.
  //
  useEffect(() => {
    if (dataType === 'people') {
      fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(setData(...data))
        return
    }

    if (dataType === 'planets') {
      fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(setData(...data))
        return
    }

    if (dataType === 'starships') {
      fetch('https://swapi.dev/api/starships/')
        .then(response => response.json())
        .then(setData(
          ...data
          
        ))
        return
    }
  }, [dataType]) // watch the selectedOption state and if it changes at any time, run this useEffect


  // // componentDidMount
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/albums')
  //     .then(response => response.json())
  //     .then(setAlbums)
  // }, []) // empty dependency array, this useEffect runs only when the component mounts and never again

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
