import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import React, {useState} from "react";
import { db } from "../database/firebaseConfig";

export function Dialog(props){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [photo, setPhoto] = useState("");
        
    const submit = (e) => {
        e.preventDefault();
        db.collection("recipes").add({
            name: name,
            description: description,
            category: category,
            photo: photo
        });
        
        setName("");
        setDescription("");
        setCategory("");
        setPhoto("");

        };
    return(
        <Modal isOpen={props.estado}>
            <form>
                <ModalHeader>
                <div>
                    <h2>Recipes</h2>
                </div>
                </ModalHeader>
                <ModalBody>
                <div>
                    <label>Nombre</label>
                    <input type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}></input><br/>
                    <label>Descripcion</label>
                    <input type="text" 
                        placeholder="Descripcion"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}/><br/>
                    <label>Categoria</label>
                    <input type="text" 
                        placeholder="Categoria"
                        value={category}
                        onChange={(e)=> setCategory(e.target.value)}/><br/>
                    <label>Foto</label>
                    <input type="text" 
                        placeholder="Foto"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}/><br/>
                </div>
                </ModalBody>
                <ModalFooter>
                <div>
                    <button onClick={submit}>Aceptar</button>
                    <button>Cancelar</button>
                </div>
                </ModalFooter>
            </form>
        </Modal>
    );
}