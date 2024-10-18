'use client';
import React, { useContext } from 'react';
import { Button, Container, Divider, Typography, Box, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ColorContext } from '@/context/ColorContext';
import Image from 'next/image';
import Link from 'next/link';

const dataPortfolio = [
  {
    title: 'Salmed',
    image: '/assets/images/salmed.png',
    url: 'https://www.salmed.net/',
  },
  {
    title: 'ViCO Biz',
    image: '/assets/images/vico_biz.png',
    url: 'https://vicobiz.com/',
  },
  {
    title: 'Safehis',
    image: '/assets/images/safehis.png',
    url: 'https://safehis.vercel.app/',
  },
  {
    title: 'VICO Science',
    image: '/assets/images/vico_science.png',
    url: 'https://vicoscience.com/',
  },
];

export const Portfolio = () => {
  const { color } = useContext(ColorContext);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      paddingTop={mdUp ? 10 : 8}
    >
      <Grid
        size={{ xs: 11, md: 10 }}
        container
        direction={'column'}
        justifyContent='center'
        alignItems='center'
      >
        <Typography
          variant={mdUp ? 'h2' : 'h4'}
          color={color}
        >
          Portafolio
        </Typography>
        <Typography
          variant={mdUp ? 'subtitle1' : 'subtitle2'}
          textAlign={'center'}
          paddingTop={4}
        >
          He desarrollado una variedad de proyectos frontend, incluyendo dashboards interactivos, aplicaciones web para
          análisis de datos y sitios web personalizados. Mi enfoque se centra en crear soluciones eficientes y
          optimizadas para brindar una experiencia de usuario fluida.
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 12, md: 10 }}
        container
        justifyContent={'center'}
        alignItems={'center'}
        paddingTop={4}
      >
        <Grid
          size={{ xs: 12, md: 12 }}
          container
          justifyContent={'center'}
          alignItems={'center'}
          spacing={4}
        >
          {dataPortfolio.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 12, md: 3 }}
              container
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Link
                href={item.url}
                target='_blank'
              >
                <Box sx={{ border: '2px solid', borderColor: { color } }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={280}
                    height={160}
                  />
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
