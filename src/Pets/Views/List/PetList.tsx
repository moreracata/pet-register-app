import { petDTO } from "../../Models/petDTO";
import { ownerDTO } from "../../../Owners/Models/OwnerDTO";
import List  from "../../../Utils/List";

export default function PetList(){
    
    const options: petDTO[] = [
        { id:1, name: 'Mia', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359874.png' ,onwnerid:'1', age:1}, 
        { id:2, name: 'Chuck', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' ,onwnerid:'2', age:2},
        { id:3, name: 'Linda', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' ,onwnerid:'2', age:3},
        { id:4, name: 'Luna', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' ,onwnerid:'2', age:3},
        { id:5, name: 'Luna', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' ,onwnerid:'2', age:4},
    ]


    const owners: ownerDTO[] = [
        { id:1, name: 'Catalina' , identificationNumber:'', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359874.png' }, 
        { id:2, name: 'Saul', identificationNumber:'' , picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' },
        { id:3, name: 'Ingrid', identificationNumber:'', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png'  },
        { id:4, name: 'David', identificationNumber:'', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png'  },
        { id:5, name: 'Mauxi',  identificationNumber:'', picture: 'https://cdn-icons-png.flaticon.com/512/4359/4359824.png' }
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

