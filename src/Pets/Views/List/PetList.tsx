import { ownerDTO } from "../../../Owners/Models/OwnerDTO";
import List from "../../../Utils/List";
import options from "../../Data/petOptions"
import owners from "../../Data/ownerOptions"
export default function PetList() {
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

