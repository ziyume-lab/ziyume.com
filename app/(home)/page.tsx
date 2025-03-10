import { TypingAnimation } from "~/components/magicui/typing-animation";
import { SparklesText } from "~/components/magicui/sparkles-text";
import { DotPattern } from "~/components/magicui/dot-pattern";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <SparklesText text="紫梦工作室" />
      <TypingAnimation>希望能够通过编程，帮助他人和创造一些有意思的东西。</TypingAnimation>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </main>
  );
}
