import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [Textboxvalue, setTextboxvalue] = useState("")
   const [checkbox, setcheckbox] = useState(false)
  const [todos, setTodos] = useState([{ id: 1, text: "Learn React", completed: false }])

  const handleAddTodo = (e) => {
    // e.preventDefault()
    
    setTodos([...todos, {
      completed: false
      ,
      text: Textboxvalue,
      id: Date.now()
    }])
    setTextboxvalue("")

     console.log("Save",todos);
  }

  const handleDeleteTodo =(id) =>{

    setTodos((prev) =>{
      return  prev.filter(t =>t.id !==id)
    })

    console.log("Delete",todos);
    
    
  }

  const handleTextboxchnage = (e) => {
    setTextboxvalue(e.target.value)
  }

  const  handleEditeTodo =(id) =>{

const Filtertodos = todos.filter((item)=>item.id==id)
console.log(Filtertodos)
    setTextboxvalue(Filtertodos[0].text)

  }
   
const handleUpdate = (id) => {
  const updatedTodos = todos.map((item) =>
    item.id === id
      ? { ...item, text: Textboxvalue }
      : item
  );

  setTodos(updatedTodos);
};

const handleCheckChnage =(id)=>{
  const CheckTrue = todos.map((item) =>
     item.id === id
      ? { ...item, completed: !item.completed }
      : item
  );

  setTodos(CheckTrue);
}

  return (
    <>
      <div >Rusi</div>
      <div>
        <input type="text" placeholder='search todo' value={Textboxvalue} onChange={handleTextboxchnage} />
        <button onClick={()=>(handleAddTodo())}>Add todo</button>

        {
          todos?.map((t) => (

            <div key={t.id}>
              <input type='checkbox' id='chkcheckbox'  checked={t.completed || false} onChange={()=>handleCheckChnage(t.id)} value={checkbox} />
              <p  >{t.text}</p>
              <button onClick={() =>handleDeleteTodo(t.id)}>delte todo</button>
              <button onClick={() =>handleEditeTodo(t.id)}>Edit todo</button>
              <button onClick={() =>handleUpdate(t.id)}>Update todo</button>
            </div>

          ))
        }

      </div>
    </>
  )
}

export default App
