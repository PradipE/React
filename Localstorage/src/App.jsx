import { useState ,useEffect} from "react";
import { TodoProvider } from "./todocontext/TodoContext";

import Todoform from "./Component/Todoform.jsx"
import Todoitem from "./Component/Todoitem.jsx"
function App() {
  const [todos, setTodos] = useState([]);
  //this is list when we create a new todo list
  const addTodo = (Todo) => {
    setTodos((Previous) => [{ Id:Date.now(), ...Todo},...rev])
  }
  // //this is when we are update a existis todo list
  // //here oldtodo is is curent todo list and the we are
  // find id of so we are search alltodo list if find then update with todo either we are stay in current todo
  const updateTodo = (id, todo)=>{
    setTodos((prev) =>prev.map((prevTodo) => (prevTodo.id === id ? todo :prevTodo)))
  }
  //delete when we find the id that we are delete so we are are not return that id so it 
  // automatically don,t show in the list 
  const deleteTodo = (id)=>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  //when we checked and complete that we are taking a all todo list and find if current todo is match with the id if match 
  //we are overwrite completed value with the ! this sign opposite the value 
  //so if value is find then cheked otherwise we are doing same situation 
  const toggleComplete  =(id)=>
  {
    setTodos((prev) => 
    prev.map((prevtodo)=> prevtodo.id === id ?{...prevtodo,completed:!prevtodo.completed}:checktodo))
  }
//so we are starting with save all this data in local storage
useEffect(()=>{
      const todos=JSON.parse(localStorage.getItem("Todo"))
      if(todos && todos.length > 0)
      {
        setTodos(todos)
      }
},[])
  useEffect(()=>
{
  localStorage.setItem("Todo",JSON.stringify(todos))
},[todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="min-h-screen bg-gray-700 py-8">
        <div
          className="w-full max-w-2xl rounded-xl shadow-sm py-4 px-3 text-white 
            mx-auto"
        >
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todo
          </h1>
          <div className="mb-4 ">
            <Todoform/>
            </div>
          <div className="flex flex-wrap gap-y-3 ">
            {todos.map((todo)=>(
              <div key={todo.id} 
              className="w-full" >
               <Todoitem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App;
