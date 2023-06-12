import { specieDTO } from "../../Models/specie.model";
import List  from "../../../Utils/List";

export default function SpecieList(){
    
    const options: specieDTO[] = [
        { id:1, name: 'Mia', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359874.png' ,details:'',description:''}, 
        { id:2, name: 'Chuck', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' ,details:'',description:''},
        { id:3, name: 'Linda', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' ,details:'',description:''},
        { id:4, name: 'Luna', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' ,details:'',description:''},
        { id:5, name: 'Luna', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' ,details:'',description:''}
    ]
 

    const opts: string[] = [
        "Name",
        "Date of Birth",
        "Specie",
        "Owner",
        "Options"
    ]


    return (
        <>
            <List headerOption={opts} options={options} />
        </>
    )

}

