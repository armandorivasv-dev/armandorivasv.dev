'use client';
import React, { useContext } from 'react';
import { Button, Container, Divider, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ColorContext } from '@/context/ColorContext';

const dataSkills = [
  {
    title: 'Comunicación Efectiva',
    description:
      'Soy capaz de comunicarme de manera clara y precisa, adaptando mi mensaje al público objetivo y escuchando activamente las ideas del equipo.',
  },
  {
    title: 'Trabajo en Equipo',
    description:
      'Trabajo bien con otros, respetando la diversidad y cooperando para alcanzar objetivos comunes, con flexibilidad ante cambios y actitud positiva.',
  },
  {
    title: 'Aprendizaje continuo',
    description:
      'Me esfuerzo por mejorar mis habilidades de forma autodidacta, adquiriendo nuevos conocimientos y tecnologías para desarrollarme profesionalmente.',
  },
];

export const Skills = () => {
  const { color } = useContext(ColorContext);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      paddingTop={mdUp ? 10 : 8}
      //paddingTop={mdUp ? 0 : 8}

      //height={'80vh'}
    >
      <Grid
        size={{ xs: 11, md: 10 }}
        container
        justifyContent='center'
      >
        <Typography
          variant={mdUp ? 'h2' : 'h3'}
          color={color}
        >
          Aptitudes
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 11, md: 10 }}
        container
        paddingTop={4}
        spacing={4}
      >
        {dataSkills.map((skill, index) => (
          <Grid
            key={index}
            size={{ xs: 12, md: 4 }}
            container
            direction='column'
            spacing={2}
          >
            <Divider
              orientation={'vertical'}
              sx={{ borderColor: color }}
            />
            <Typography
              variant='subtitle1'
              sx={{ maxWidth: '90%' }}
            >
              {skill.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
