import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { specieCreationDTO } from "../../Models/specie.model";
import SpecieForm  from "../../SpecieForm";
import { urlSpecies } from '../../../endpoints';

export default function EditSpecie(){
    const model :specieCreationDTO = 
        { name:'', description: '', details: ' ', picture: ' ' }

        const history = useHistory();
        const [errors, setErrors] = useState<string[]>([]);
    
        async function create(specie: specieCreationDTO){
            try{
                await axios.post(urlSpecies, specie);
                history.push('/species');
            }
            catch (error) {
                if (error /*&& error.response*/){
                    console.log("Error")
                   // setErrors(error.response.data);
                }
            }
        }
    
    return (
        <>
        
        <div className="form-container"> 
            <h1>Register a new Specie </h1> 
            <SpecieForm model={model}
                onSubmit={async value => { await create(value);}}
            />
            </div>
               
        </>
    )


    
}
