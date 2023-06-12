import { petCreationDTO } from "../../Models/petDTO";
import PetForm  from "../../PetForm";

export default function EditPet(){
    const model :petCreationDTO = 
        { name:'test', owner: '', pictureURL: '' }
    


    return (
        <>
        
        <div className="form-container"> 
            <h1>Pets Register </h1> 
            <PetForm model={model}
                onSubmit={values => console.log(values)}
            />
            </div>
               
        </>
    )


    
}
