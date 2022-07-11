export interface Character

{
    name: string;
    imageUrl: string;
    status: string;
    species: string;
    id: number;

}

export interface Info{
    next: string;
    prev: string;
}

export interface PageData{
    info: Info;
    results: Array<Character>;
}