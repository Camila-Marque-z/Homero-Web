import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-[90vh]">
      <div>
        <Image
        className=""
        src={"/Background.jpg"}
        fill={true}
        quality={100}
        alt=""
        />
      </div>
      <section>
        <h1>This is the second section</h1>
      </section>
    </div>
  );
}
