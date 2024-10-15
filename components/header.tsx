import {
  Menu,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[80px] shadow-lg">
      <div className="h-full max-w-screen-lg mx-auto px-2 md:px-8 lg:px-0 flex justify-between">
        <Link href="/" className="flex items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/imgs/yanai-lab.png"
              alt="yanai lab logo"
              width={51.8}
              height={60.0}
            />
            <div className="font-bold text-2xl md:text-4xl text-slate-800">計量政治経済研究室</div>
          </div>
        </Link>

        {/* mobile */}
        <div className="flex items-center md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu size={38} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60 text-slate-800">
              <DropdownMenuLabel className="text-lg">Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href="/about">
                  <DropdownMenuItem>
                    <p className="text-lg">About</p>
                  </DropdownMenuItem>
                </Link>
                <Link href="/research">
                  <DropdownMenuItem>
                    <p className="text-lg">Research</p>
                  </DropdownMenuItem>
                </Link>
                <Link href="/contact">
                  <DropdownMenuItem>
                    <p className="text-lg">Contact</p>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* PC, tablet */}
        <div className="hidden h-full md:flex items-center">
          <ul className="md:flex text-2xl text-slate-800 space-x-4">
            <li className="hover:text-[#1B7AFE]">
              <Link href="/about">
                About
              </Link>
            </li>
            <li className="hover:text-[#1B7AFE]">
              <Link href="/research">
                Research
              </Link>
            </li>
            <li className="hover:text-[#1B7AFE]">
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;