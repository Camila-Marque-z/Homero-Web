import { paramsCharacter } from "@/app/types/character";

export default async function idcharacter({params}:paramsCharacter){

    const{idcharacter}= await params;
    return(
        <>
            <h1>This is the {idcharacter}´s web</h1>
        </>
    )
}