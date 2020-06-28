const dbAnime =
[
    {
        id : 1,
        name: 'Naruto',
        idPersona: 1
    },
    {
        id : 2,
        name: 'Death Note',
        idPersona: 2
    },
    {
        id : 3,
        name: 'Attack on Titan',
        idPersona: 3
    }
];
const dbPersonajes =
[
    {
        id: 1,
        nombre: 'Naruto Uzumaki'
    },
    {
        id: 2,
        nombre: 'Light Yamagi'
    },
    {
        id: 3,
        nombre: 'Eren Jagger'
    }
]

async function getAnime(id){
        const anime = dbAnime.find(anime => anime.id === id);
        if(!anime){
            const error = new Error();
            error.message = 'El anime no existe en la DB';
            throw error;
            }
            return anime;
}
async function getPersonaje(id){

        const personaje = dbPersonajes.find(personaje => personaje.id === id);
        if(!personaje){
            const error = new Error();
            error.message = 'El personaje no existe en la DB';
            throw error;
                 }
                 return personaje;

}

async function main(){
    try{
        const anime = await getAnime(3);
        const personaje = await getPersonaje(15);
        console.log(`Este anime ${anime.name} es interpretado por ${personaje.nombre}`);
    }catch(e){
    console.log(e.message)
    }    
}

main();