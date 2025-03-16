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
  githubUrl: 'https://github.com/besscroft',
};

export const linkOptions: BaseLayoutProps = {
  links: [
    {
      type: 'menu',
      text: '文档',
      items: [
        {
          text: 'PicImpact',
          description: '自部署的摄影作品网站，支持多种功能特性。PicImpact，分享你和世界！',
          url: '/docs/pic',

          // (optional) Props for Radix UI Navigation Menu item in Home Layout
          menu: {
            className: 'row-span-2',
          },
        },
      ],
    },
    {
      text: '关于',
      url: '/about',
      active: 'url',
    },
  ],
}