import Header from './components/Header';
import Tasks from './components/Tasks'
import { useState} from 'react' 
// import React from 'react'

function App() {
  const [tasks,setTasks] = useState([
    {
    id:1,
    text:'Doctors Appointment',
    day: 'sunday @ 2:30pm',
    reminder:true,

},
{
    id:2,
    text:'Doctors Appointment',
    day: 'sunday @ 2:30pm',
    reminder:true,

},
{
    id:3,
    text:'Doctors Appointment',
    day: 'sunday @ 2:30pm',
    reminder:true,

},
{
    id:4,
    text:'Doctors Appointment',
    day: 'sunday @ 2:30pm',
    reminder:true,

}])


const deleteTask =(id) => {
  setTasks(tasks.filter((task)=> task.id !==id))
}


//Toggle remindar
const toggleReminder =(id) => {
  setTasks(
    tasks.map((task)=> 
    task.id===id ? {...task,reminder: 
    !task.reminder } : task
    )
  )
}


  return (
    <div className="container">
          <Header  />
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} 
          onDelete={deleteTask}  onToggle={toggleReminder}/>
  ) : ('No task to show'
  )}
    </div>
  )
}
// class App extends React.Component {
//   render() {
//     return(
//       <h1>Hello from react app</h1>
//     )
//   }
// }
export default App;
