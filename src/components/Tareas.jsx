const tareas = [
    { id: 1,
    texto: "ir a comer",
fecha: "Julio Regalado jsjsjs",
terminada: true,},
{
    id: 2,
    texto: "ir al superrrr",
    fecha:"14 de bebrero",
    terminada: false,
},
{
    id: 3,
    texto:"Besar a Jacquita",
    fecha: "hoy",
    terminada: false,
}
]

const Tareas=()=> {
  return (
<>
{tareas.map((tarea)=>(<h3 key={tarea.id}>{tarea.texto}</h3>))}</>
      )
}

export default Tareas