import Image from "next/image";
import { placeholderImage } from "@/lib/utils";
import type { TeamMember } from "@/lib/types";

const seedMap: Record<string, string> = {
  "team-director": "person-angela",
  "team-programs": "person-marcus",
  "team-development": "person-priya",
};

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const seed = seedMap[member._id] ?? member._id;

  return (
    <article className="text-center">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 ring-4 ring-brand-blue/10">
        <Image
          src={placeholderImage(seed, 400, 400)}
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
