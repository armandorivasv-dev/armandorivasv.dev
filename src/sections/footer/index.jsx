'use client';
import React, { useContext } from 'react';
import { Button, Container, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { DiGithubBadge } from 'react-icons/di';
import { IoLogoLinkedin } from 'react-icons/io';

import Link from 'next/link';

function Copyright() {
  return (
    <Typography
      textAlign='center'
      variant='body2'
      color='text.secondary'
      mt={1}
    >
      {'Copyright © '}
      armandorivasv.dev {new Date().getFullYear()}
    </Typography>
  );
}

export const Footer = () => {
  return (
    <Grid
      container
      direction={'column'}
      justifyContent='center'
      alignItems='center'
      marginTop={10}
      padding={5}
    >
      <Grid
        container
        justifyContent='center'
        spacing={3}
      >
        <Grid>
          <Link
            href='https://github.com/armandorivasv-dev/ '
            target='_blank'
          >
            <Typography variant='h3'>
              <DiGithubBadge />
            </Typography>
          </Link>
        </Grid>
        <Grid>
          <Link
            href='https://www.linkedin.com/in/armandorivasv/ '
            target='_blank'
          >
            <Typography variant='h3'>
              <IoLogoLinkedin />
            </Typography>
          </Link>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent='center'
        spacing={3}
      >
        <Copyright />
      </Grid>
      {/* <Grid
        size={{ xs: 12, md: 10 }}
        container
        justifyContent='center'
      >
        <Typography
          variant='h2'
          color={color}
        >
          Tecnologías
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 12, md: 10 }}
        container
        justifyContent={'center'}
        alignItems={'center'}
        marginTop={4}
      >
        {dataSkills.map((skill, index) => (
          <Grid
            key={index}
            size={{ xs: 12, md: 2 }}
          >
            <Typography
              variant='h2'
              textAlign='center'
            >
              {skill.description}
            </Typography>
          </Grid>
        ))}
      </Grid> */}
    </Grid>
  );
};
