import Link from "next/link"

export default function Navbar(){
    return(
        <>
        <div className="w-screen flex h-24 text-amber-300 font-black">
            <ul className="w-full flex justify-center items-center gap-8">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/Characters"}>Characters</Link></li>
                <li>Episodes</li>
            </ul>
        </div>
        </>
    )
}

