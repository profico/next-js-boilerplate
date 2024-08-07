import React, { PropsWithChildren } from 'react';

export const metadata = {
  title: 'Next.js Boilerplate',
  description: 'Generated by Profico ❤️',
};

const RootLayout: React.FC<Required<PropsWithChildren>> = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
