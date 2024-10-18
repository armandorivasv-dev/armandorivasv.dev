'use client';
import React, { useContext } from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ColorContext } from '@/context/ColorContext';
import { DiJsBadge } from 'react-icons/di';
import { DiGithubBadge } from 'react-icons/di';
import { RiNextjsFill } from 'react-icons/ri';
import { RiReactjsFill } from 'react-icons/ri';
import { SiMui } from 'react-icons/si';
import { FaGit } from 'react-icons/fa';

const dataSkills = [
  {
    title: 'JavaScript',
    description: <DiJsBadge />,
  },
  {
    title: 'React',
    description: <RiReactjsFill />,
  },
  {
    title: 'Next',
    description: <RiNextjsFill />,
  },
  {
    title: 'MUI',
    description: <SiMui />,
  },
  {
    title: 'Git',
    description: <FaGit />,
  },
  {
    title: 'GitHub',
    description: <DiGithubBadge />,
  },
];

export const Tecnologies = () => {
  const { color } = useContext(ColorContext);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      paddingTop={mdUp ? 0 : 8}
      //paddingTop={mdUp ? 10 : 8}
    >
      <Grid
        size={{ xs: 11, md: 10 }}
        container
        justifyContent='center'
      >
        <Typography
          variant={mdUp ? 'h2' : 'h4'}
          color={color}
        >
          Tecnologías
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 11, md: 10 }}
        container
        justifyContent={'center'}
        alignItems={'center'}
        paddingTop={4}
        spacing={2}
      >
        {dataSkills.map((skill, index) => (
          <Grid
            key={index}
            size={{ xs: 4, md: 2 }}
          >
            <Typography
              variant='h2'
              textAlign='center'
            >
              {skill.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
