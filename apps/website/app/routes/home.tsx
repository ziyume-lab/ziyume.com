import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { DotPattern } from '~/components/design/dot-pattern';
import { cn } from '~/lib/utils';
import { baseOptions } from '~/app/root';
import { SparklesText } from '~/components/design/sparkles-text';
import { TypingAnimation } from '~/components/design/typing-animation';

export default function Home() {
  return (
    <HomeLayout
      {...baseOptions}
      className="flex flex-1 flex-col justify-center text-center"
      nav={{
        title: '紫梦工作室',
      }}
    >
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "flex-1"
        )}
      />
      <div className="mt-24 space-y-8">
        <SparklesText>
          紫梦工作室
        </SparklesText>
        <TypingAnimation className={'text-xl'}>
          希望能够通过编程，帮助他人和创造一些有意思的东西。
        </TypingAnimation>
      </div>
    </HomeLayout>
  );
}
