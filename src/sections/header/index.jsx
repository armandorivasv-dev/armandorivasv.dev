'use client';
import React, { useContext } from 'react';
import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useWindowScroll } from '@/hooks/use-window-scroll';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import CheckboxChangeColor from '@/components/CheckboxChangeColor';
import Grid from '@mui/material/Grid2';

function Header() {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  // ScrollFunction
  const [inScrooll, setInScroll] = useState(false);
  const offset = 64;
  const delay = 100;

  const handleWindowScroll = useCallback(() => {
    if (window.scrollY > offset) {
      setInScroll(true);
    } else {
      setInScroll(false);
    }
  }, []);

  useWindowScroll({
    handler: handleWindowScroll,
    delay,
  });

  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          boxShadow: 0,
          bgcolor: '#000000',
        }}
      >
        <Grid
          container
          justifyContent={'center'}
        >
          <Grid size={{ xs: 11, md: 10 }}>
            <Toolbar
              disableGutters
              variant='regular'
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,

                backdropFilter: 'blur(24px)',
                minHeight: 50,
              })}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',

                  px: 0,
                }}
              >
                <Image
                  src={'/assets/logos/logo-armandorivasv-dev.png'}
                  alt='Logo VICO'
                  width={inScrooll && mdUp ? 100 : 60}
                  height={inScrooll && mdUp ? 100 : 60}
                  priority={true}
                />
              </Box>
              <Box
                sx={{
                  display: { xs: 'flex', md: 'flex' },
                  gap: 0.5,
                  alignItems: 'center',
                }}
              >
                <CheckboxChangeColor />
              </Box>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
}

Header.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default Header;
