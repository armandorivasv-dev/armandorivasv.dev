'use client';
import React, { useContext } from 'react';
import { Button, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ColorContext } from '@/context/ColorContext';
import Scene from '@/components/Scene';

export const Hero = () => {
  const { color } = useContext(ColorContext);

  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
    >
      <Grid
        size={{ xs: 11, md: 10 }}
        container
      >
        <Grid
          size={{ xs: 12, md: 8 }}
          height={{ xs: '60vh', md: '80vh' }}
          sx={{ pt: mdUp ? '0vh' : '10vh' }}
        >
          <Scene />
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          textAlign={'right'}
          sx={{ py: mdUp ? '15vh' : '0vh' }}
        >
          <Typography variant='subtitle1'>Hola, mi nombre es</Typography>
          <Typography
            variant={mdUp ? 'h1' : 'h3'}
            color={color}
          >
            Armando Rivas
          </Typography>
          <Typography variant='subtitle1'>
            Soy desarrollador FrontEnd enfocado en crear interfaces limpias, atractivas y altamente funcionales, que
            brinden una experiencia excepcional a los usuarios.
          </Typography>
          <Button
            variant='contained'
            size='large'
            sx={{ mt: '2vh', bgcolor: color, color: 'black' }}
            href='mailto:armandorivasv.dev@gmail.com'
          >
            Contactame
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
