import Item from "./Item"

const tarefas = [
  {
    title: "Learn React",
    desc: "Find online classes on YouTube",
    date: "01/02/2023",
    done: true
  },
  {
    title: "Learn Typescript",
    desc: "Find online classes on YouTube",
    date: "01/02/2023",
    done: false
  },
  {
    title: "Learn Vue.js",
    desc: "Find online classes on YouTube",
    date: "01/02/2023",
    done: false
  },
  {
    title: "Learn Angular",
    desc: "Find online classes on YouTube",
    date: "02/03/2023",
    done: true
  }
]

const Items = () => {
  return (
    <div className='mt-[2.5rem] flex flex-wrap gap-3 justify-evenly' >
      {tarefas.map((tarefa, i) => (
        <Item {...tarefa} />
      ))}
    </div>
  )
}

export default Items