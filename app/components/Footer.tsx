import Image from "next/image";
import Link from "next/link";

type LinkTypes = {
  Link1: string;
  Link2: string;
  Link3: string;
  Link4: string;
};

const Footer = ({ Link1, Link2, Link3, Link4 }: LinkTypes) => {
  return (
    <>
      <footer className="bg-black md:rounded-[2.5rem] text-white">
        <footer className="h-auto px-8 py-12 md:py-16 max-w-7xl mx-auto flex md:flex-row flex-col justify-between items-center">
          <div className="w-full md:w-1/2">
            <h1 className="px-8 text-center md:text-left text-xl md:text-3xl font-medium">Connect on Socials</h1>

            <div className="flex justify-center md:justify-normal space-x-5 pt-4 md:pl-8">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.tiktok.com/@thehotspots_plug"}
              >
                <Image
                  src={"/assets/tiktok.svg"}
                  className=" scale-150"
                  alt="tiktok"
                  width={50}
                  height={50}
                />
              </Link>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.instagram.com/miss_hotspots"}
              >
                <Image
                  src={"/assets/instagram.svg"}
                  alt="instagram"
                  className="scale-150"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-x-8 flex md:justify-end justify-center md:px-10 relative top-4 text-xl md:text-2xl md:py-8 pb-3 font-medium">
            <Link href={Link3}>
              <h1 className="hover:scale-125 duration-200">{Link1}</h1>
            </Link>
            <Link href={Link4}>
              <h1 className="hover:scale-125 duration-200">{Link2}</h1>
            </Link>
          </div>
        </footer>

        <div className="flex justify-center text-sm italic text-white/50 font-medium relative bottom-5">
          Designed by
          <Link
            className="underline px-1"
            target="_blank"
            href={"https://twitter.com/bethoven_js"}
          >
            @bee
          </Link>
          and
          <Link
            className="underline pl-1"
            target="_blank"
            href={"https://twitter.com/kdsthegeek"}
          >
            {" "}
            @kdsthegeek
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
