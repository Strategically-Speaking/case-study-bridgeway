import Image from "next/image";
import { teamImages } from "@/lib/images";
import type { TeamMember } from "@/lib/types";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const imgSrc = teamImages[member._id] ?? teamImages["team-director"];

  return (
    <article className="text-center">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 ring-4 ring-brand-blue/10">
        <Image
          src={imgSrc}
          alt={member.image.alt}
          fill
          className="object-cover"
          sizes="128px"
        />
      </div>
      <h3 className="text-lg font-semibold text-brand-blue">{member.name}</h3>
      <p className="text-brand-teal text-sm font-medium mb-3">{member.title}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
    </article>
  );
}
