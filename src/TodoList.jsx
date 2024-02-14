import { useEffect, useState } from "react"
import List from '@mui/material/List';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Box, Typography } from "@mui/material";
const getInitalTodos = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if(!data) return []
    return data
}
export default function TodoList(){
    const [todos,setTodos] = useState(getInitalTodos);
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    const remove = (id) => {
        setTodos(prevTodos=>{
            return prevTodos.filter(todo=>todo.id!==id)
        })
    }
    const toggle = (id) =>{
        setTodos(prevTodos => {
            return prevTodos.map(todo=>{
                if(todo.id===id){
                    return {...todo,completed:!todo.completed}
                }else{
                    return todo
                }
            });
        })
    }
    const addTodo = (text) => {
        setTodos(prevTodos=>{
            return [...prevTodos,{id:crypto.randomUUID(),text:text,completed:false}]
        })
    }
    return(
        <Box sx={{
            display:"flex",
            justifyContent:'center',
            mt:5,
            flexDirection:"column",
            alignItems:'center'
        }}>
        <Typography variant="h2" component="h1">Todos</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        
        {todos.map(todo=>(
            <TodoItem todo={todo} key={todo.id} remove={remove} toggle={toggle}/>
        ))}
        <TodoForm addTodo={addTodo}/>
        </List>
        </Box>
    )
}