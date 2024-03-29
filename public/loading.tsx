import Image from "next/image";

const Loading = () => {
  return (
    <>
      <main
        className="bg-cover bg-center h-screen w-full -z-10 fixed"
        style={{
          backgroundImage: `url(/misshotspots/Banner.PNG)`,
        }}
      ></main>

      <div className="flex justify-center items-center h-[80vh]">
        <Image
          className="animate-ping rounded-md"
          priority
          src={`/logos/logo-color.svg`}
          alt="loading..."
          height={100}
          width={100}
        />
      </div>
    </>
  );
};

export default Loading;
