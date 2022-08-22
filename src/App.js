import { collection, getDocs } from "firebase/firestore";
import React, {useState,useEffect} from "react";
import {db} from './database/firebaseConfig';
import 'bootstrap/dist/css/bootstrap.css';
import { Dialog } from "./components/dialog";

function App() {

  const data =[];
  const [recipes,setRecipes]=useState(data);
  const [dialogState,setDialogState]=useState(false);

  useEffect(()=>{
   const Recipescollection = collection(db,"recipes");
   getDocs(Recipescollection).then(response =>{
    const mRecipes =response.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }))
    setRecipes(mRecipes);
   }).catch((err) => console.log(err.message))
  }, []);

  return (
   <div>

     <table className="table">
      <thead>
        <tr>
          <th scope="col">Recipe</th>
          <th scope="col">Description</th>
          <th scope="col">Category</th>
          <th scope="col">image</th>
          <th><button onClick={()=>{setDialogState(true)}}>Add</button></th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe,i)=>(
          <tr key={recipe.id}>
            <td><b>{recipe.data.name}</b></td> 
            <td>{recipe.data.description}</td> 
            <td>{recipe.data.category}</td>
            <td><img width={100} height={100} src={recipe.data.photo} alt="Imagen de referencia"/></td> 
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Dialog estado={dialogState}/>
   </div>
  );
}

export default App;
