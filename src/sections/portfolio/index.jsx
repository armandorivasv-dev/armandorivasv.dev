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
    url: 'https://www.salmed.net/',
  },
  {
    title: 'Safehis',
    image: '/assets/images/safehis.png',
    url: 'https://www.salmed.net/',
  },
  {
    title: 'VICO Science',
    image: '/assets/images/vico_science.png',
    url: 'https://www.salmed.net/',
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
          variant={mdUp ? 'h2' : 'h3'}
          color={color}
        >
          Portafolio
        </Typography>
        <Typography
          variant='subtitle1'
          color={color}
          textAlign={'center'}
        >
          He trabajado en diversos proyectos de FrontEnd, como Dashboards, Aplicaciones Web para analisis de data y
          WebSites.
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 12, md: 10 }}
        container
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid
          size={{ xs: 12, md: 12 }}
          container
          justifyContent={'center'}
          alignItems={'center'}
          paddingTop={4}
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
