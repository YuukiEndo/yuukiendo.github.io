import { Code, Hash, Github, Music, Network, GamepadIcon } from "lucide-react"

interface SkillBadgeProps {
  name: string
  icon: "Code" | "Hash" | "Github" | "Music" | "Network" | "GameController"
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  // Map icon names to Lucide React components
  const IconComponent =
    icon === "GameController"
      ? GamepadIcon
      : icon === "Code"
        ? Code
        : icon === "Hash"
          ? Hash
          : icon === "Github"
            ? Github
            : icon === "Music"
              ? Music
              : Network

  return (
    <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 transition-all hover:border-primary">
      <div className="mb-2 rounded-full bg-primary/10 p-2">
        <IconComponent className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-medium">{name}</h3>
    </div>
  )
}
