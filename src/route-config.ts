import MainOptions from "./Main/Index";

import OwnerIndex from "./Owners/IndexOwner";
import OwnerList from "./Owners/Views/List/OwnerList";
import OwnerCreation from "./Owners/Views/Creation/CreateOwner";
import OwnerEdition from "./Owners/Views/Edition/EditOwner";

import SpecieIndex from "./Specie/IndexSpecie";
import SpecieList from "./Specie/Views/List/SpecieList";
import SpecieCreation from "./Specie/Views/Creation/CreateSpecie";
import SpecieEdition from "./Specie/Views/Edition/EditSpecie";

import PetIndex from './Pets/IndexPets';
import PetList from "./Pets/Views/List/PetList";
import PetCreation from "./Pets/Views/Creation/CreatePet";
import PetEdition from "./Pets/Views/Edition/EditPet";


import RedirectToMainPage from './Utils/RedirectToMainPage';

const routes = [
    {path: '/Index', component: MainOptions, exact: true},

    {path: '/Owner', component: OwnerIndex, exact: true},
    {path: '/OwnerEdition', component: OwnerEdition, exact: true},
    {path: '/OwnerCreation', component: OwnerCreation, exact: true},
    {path: '/OwnerList', component: OwnerList, exact: true},

    {path: '/Specie', component: SpecieIndex, exact: true},
    {path: '/SpecieEdition', component: SpecieEdition, exact: true},
    {path: '/SpecieCreation', component: SpecieCreation, exact: true},
    {path: '/SpecieList', component: SpecieList, exact: true},

    {path: '/Pet', component: PetIndex, exact: true},
    {path: '/PetEdition', component: PetEdition, exact: true},
    {path: '/PetCreation', component: PetCreation, exact: true},
    {path: '/PetList', component: PetList, exact: true},

    {path: '/', component: MainOptions, exact: true},
    {path: '*', component: RedirectToMainPage}
    
];

export default routes;