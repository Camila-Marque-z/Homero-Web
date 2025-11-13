interface paramsCharacter{
    params: Promise<{ 
        character: string
     }>
}



export default async function Homero({params}:paramsCharacter){

    const{character}=await params;
    return(
        <>
            <h1>This is the Homero´s web</h1>
        </>
    )
}