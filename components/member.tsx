import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  SquareArrowOutUpRight,
} from "lucide-react";

interface MemberType {
  name: string,
  nameRomaji: string,
  position: string,
  image: string,
  github: string,
  description: string,
}

export default function Member({
  name,
  nameRomaji,
  position,
  image,
  description,
  github,
}: MemberType) {
  return (
    <div className="w-full p-4">
      <Image
        src={`/imgs/icons/${image}`}
        alt={name}
        width={85}
        height={85}
        className="rounded-full mx-auto"
      />
      <div className="flex space-x-2 mt-2">
        <div className="">
          <Badge variant="secondary">{position}</Badge>
        </div>
        <div className="text-lg font-bold">
          <p>{name}</p>
          <p>({nameRomaji})</p>
        </div>
      </div>
      <div className="my-2">
        {description}
      </div>
      <div className="w-fit">
        <Link href={`https://github.com/${github}`} target="_blank" className="flex space-x-1 text-[#1B7AFE]">
          <div className="font-bold">
            GitHub
          </div>
          <div className="my-auto">
            <SquareArrowOutUpRight size={18} />
          </div>
        </Link>
      </div>
    </div>
  )
}

// Avatar