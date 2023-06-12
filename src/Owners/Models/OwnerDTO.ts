export interface ownerDTO {
    id: number;
    identificationNumber: string;
    name: string;
    picture: string;
}

export interface ownerCreationDTO {
    identificationNumber: string;
    name: string;
    picture: string;
}

export interface ownerListDTO {
    ownersList:ownerDTO[]
}