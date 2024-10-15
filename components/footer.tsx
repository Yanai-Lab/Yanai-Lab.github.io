import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-fit bg-slate-800 p-2 mt-auto">
      <div className="flex justify-center space-x-4">
        <div className="flex flex-col md:flex-row items-center text-gray-200 space-x-2">
          {/* mobile */}
          <p className="md:hidden font-bold">
            &copy; 2024 Laboratory for QPE.
          </p>
          {/* PC, tablet */}
          <p className="hidden md:block font-bold text-xl">
            &copy; 2024 Laboratory for Quantitative Political Economy.
          </p>
          <p className="text-base md:text-lg">
            All right reserved.
          </p>
        </div>
        <div>
          <Link href="https://github.com/yanai-lab" target="_blank">
            <Image
              src="/logos/github.png"
              alt="GitHub logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;