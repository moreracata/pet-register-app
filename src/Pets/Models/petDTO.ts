export interface petDTO {
    id: number;
    name: string;
    dateOfBirth?: Date;
    onwnerid: string;
    picture: string;
    age: number
}

export interface petCreationDTO {
    name: string;
    owner: string;
    pictureURL: string;
    dateOfBirth?: Date;
}

export interface petListDTO {
    petList:petDTO[]
}
