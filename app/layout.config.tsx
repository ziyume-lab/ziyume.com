import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import favicon from '~/public/apple-touch-icon.png';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          src={favicon}
          alt="Logo"
          width={24}
          height={24}
        />
        紫梦工作室
      </>
    ),
  },
  links: [
    {
      text: 'PicImpact',
      url: '/docs/pic',
      active: 'nested-url',
    },
  ],
  githubUrl: 'https://github.com/besscroft',
};
