import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeader({className, children }: SectionHeaderProps) {
  return (
    <div className="border-b w-full h-full p-10 md:p-14">
      <div className={cn("max-w-2xl mx-auto flex flex-col items-center justify-center gap-2", className)}>
        {children}
      </div>
    </div>
  );
}
