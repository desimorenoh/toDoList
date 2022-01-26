import React, {useState} from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

function ToDoList() {
    const [toDos, setTodos] = useState([])

    const addToDo = toDo => {
        if (!toDo.text || /^\s*$/.test(toDo.test)) {
            return
        }

        const newToDos = [toDo, ...toDos]

        setTodos(newToDos)

    }
    const updateToDo = (toDoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === toDoId ? newValue : item)))
    }
    
    const removeToDo = id => {
      const removeArr = [...toDos].filter(toDo => toDo.id !== id);
      setTodos(removeArr);
    }

    return (
        <div>
            <h1>What´s the plan for today!</h1>
            <ToDoForm onSubmit={addToDo}/>
            <ToDo toDos={toDos} removeToDo={removeToDo} updateToDo={updateToDo}/>
        </div>
    )


}

export default ToDoList
