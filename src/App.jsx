// import React, { useState } from 'react'
import { useState } from 'react'
function App() {
  const [todo,settodo]= useState("")
  const [list,setList]= useState([])
  const [checked, setChecked] = useState({})
  // console.log(todo)

  function handclick(){
    setList([...list,todo])

  }
  function deletelist(id){
     const filterlist =list.filter((item,index)=>
      index != id) 
    return setList(filterlist) 

    }

    function handleCheck(index) {
       setChecked({ ...checked, [index]: !checked[index] }) 
    }
  return (
    <>
    <div style={{ width: "500px", margin: "50px auto", padding: "20px", backgroundColor: "#e6e6fa", borderRadius: "15px", }} >
   <h1 style={{ textAlign: "center", color: "purple", marginBottom: "20px" }} > TO DO LIST </h1>
    <input type="text" placeholder="Enter your task..." onChange={(e) => settodo(e.target.value)}
     style={{ padding: "10px", width: "300px", border: "2px solid purple", borderRadius: "8px", outline: "none", fontSize: "16px" }} /> 
     
     <button onClick={handclick} style={{ padding: "10px 18px", marginLeft: "10px", backgroundColor: "purple", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }} > Add </button>
      <div style={{ width: "450px", 
        margin: "30px auto", 
        padding: "20px",
         backgroundColor: "#f5f0ff",
          borderRadius: "15px" }} >
         { list.map((item, index) => 
         <ul key={index} style={{ padding: "0", margin: "10px 0" }} >
          
           <li 
           style={{ listStyle: "none", backgroundColor: "white", padding: "15px", borderRadius: "10px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 3px 8px rgba(0,0,0,0.1)", fontSize: "16px" 
            
           }} >
             <input type="checkbox"
             onChange={() => handleCheck(index)}
              style={{ width: "18px", height: "18px" }} /> 


              <span style={{ flex: "1"  , textDecoration: checked [index] ? "line-through" : "none" }} > {item} </span> 
              
              <button onClick={() => deletelist(index)} 
              style={{ padding: "8px 12px",
               backgroundColor: "red",
                color: "white",
                 border: "none",
                  borderRadius: "6px",
                   cursor: "pointer" 
                  }} > Delete </button>
                    </li>
                     </ul> ) }
                      </div>
   
    </div>
    </>
  )
}


export default App