import { useState } from "react"
import AddCategoria from "./components/AddCategoria"
import GifGrid from "./components/GifGrid"


const GifExpertApp = () => {
  /* const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'] */
  const [categorias, setCategorias] = useState([''])

  /*   const agregar = () => {
      setCategorias([['Hunter X Hunter'], ...categorias,])
     // setCategorias(cat => [...cat, 'Hunter X Hunter']) 
      console.log(categorias);
    }
    console.log(categorias); */

  return (
    <>
      <h1>Gif Finder App</h1>
      <h4>Introduce una o más palabras clave para mostrar una colección de 10 GIFs:</h4>
      {/* En "<AddCategoria setCategorias={setCategorias} />" se envía la propiedad
        * "{setCategorias} desde el padre "GifExpertApp" al hijo "AddCategoria"
      */}   
      <AddCategoria setCategorias={setCategorias} />
      <hr />
      <ol>
        {
          categorias.map(categoria =>
            <GifGrid key={categoria} categoria={categoria} />
          )
        }
      </ol>
    </>
  )
}
export default GifExpertApp