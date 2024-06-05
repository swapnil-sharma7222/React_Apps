import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
const getLocalStorage= ()=> {
  let list= localStorage.getItem('list');
  if(list){
    return list= JSON.parse(list);
  }else{
    return []
  }
}
function App() {
  const [todo, setTodo]= useState('');
  const [alert, setAlert]= useState({
    show: false, msg: '', type: ''
  });
  const [list, setList]= useState(getLocalStorage);
  const [isEditing, setIsEditing]= useState(false);
  const [editID, setEditID]= useState('');
  useEffect(()=> {
    const timeout= setTimeout(()=> {
      setAlert({ show: false, msg: '', type: '' });
    }, 2000);
    return ()=> clearTimeout(timeout);
  }, [alert]);

  const handleSubmit= (e)=> {
    e.preventDefault();
    console.log(todo);
    if (todo.trim() !== '') {
      if(isEditing){
        setList(list.map((task)=> {
          if(task.id=== editID){
            return {...task, title: todo};
          }
          else{
            return task;
          }
        }))
        setTodo('');
        setEditID(null);
        setIsEditing(false);
        setAlert({show: true, type: 'success', msg: 'value changed'});
      }
      else{
        const newTask = { id: new Date().getTime().toString(), title: todo };
        setList((prevList) => [...prevList, newTask]);
        setAlert({ show: true, msg: 'Task added', type: 'success'});
        setTodo('');
      }
    }
  };

  const removeTask = (id) => {
    setAlert({show:true, type:'danger', msg: 'item removed'});
    setList(list.filter((item) => item.id !== id));
  };

  const editTask= (id)=> {
    setIsEditing(true);
    const toEdit= list.filter((task)=> id=== task.id);
    setTodo(toEdit[0].title);
    console.log(toEdit);
    setEditID(id);
  }
  const clearList= ()=> {
    setList([]);
  }

  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list))
  }, [list]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert alert= {alert} list= {list}/>}
      <h3 className="title">ToDo List</h3>
      <div className='form-control'>
        <input type="text" className='grocery' placeholder='ToDos' autoFocus
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}/>
        <button type="submit" className='submit-btn'>{isEditing? 'Edit': 'Submit'}</button>
      </div>
      </form>
      {list.length> 0 && <div className='grocery-container'>
      <List list={list} removeTask={removeTask} editTask={editTask}/>
      <button className='clear-btn' onClick={clearList}>clear items</button>
      </div>}
    </section>    
  )
}

export default App