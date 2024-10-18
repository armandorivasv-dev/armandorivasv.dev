import './globals.css';
import Header from '@/sections/header';
import { ColorProvider } from '@/context/ColorContext';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from '@/theme/get-custom-theme';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Armando Rivas V | Portafolio',
  description: 'Bienvenidos a Mi Portafolio como Desarrollador FrondEnd ',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ColorProvider>
          <ThemeProvider theme={customTheme}>
            <Header />
            {children}
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </ColorProvider>
      </body>
    </html>
  );
}
