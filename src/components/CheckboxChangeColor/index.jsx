'use client';

import React, { useContext } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid2';
import { Button, Container, Typography, useMediaQuery } from '@mui/material';
import { ColorContext } from '@/context/ColorContext';

const CheckboxChangeColor = () => {
  const { color, handleChangeColor } = useContext(ColorContext);

  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Grid
      container
      justifyContent='center'
    >
      <Grid>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby='demo-controlled-radio-buttons-group'
            name='controlled-radio-buttons-group'
            value={color}
            onChange={handleChangeColor}
          >
            <FormControlLabel
              value='#FFFFFF'
              labelPlacement='start'
              control={
                <Radio
                  size={mdUp ? 'medium' : 'small'}
                  sx={{ color: '#FFFFFF', '&.Mui-checked': { color: '#FFFFFF' } }}
                />
              }
            />
            <FormControlLabel
              value='#00B8FF'
              labelPlacement='start'
              control={
                <Radio
                  size={mdUp ? 'medium' : 'small'}
                  sx={{ color: '#00B8FF', '&.Mui-checked': { color: '#00B8FF' } }}
                />
              }
            />
            <FormControlLabel
              value='#00FFF9'
              labelPlacement='start'
              control={
                <Radio
                  size={mdUp ? 'medium' : 'small'}
                  sx={{ color: '#00FFF9', '&.Mui-checked': { color: '#00FFF9' } }}
                />
              }
            />
            <FormControlLabel
              value='#4900FF'
              labelPlacement='start'
              control={
                <Radio
                  size={mdUp ? 'medium' : 'small'}
                  sx={{ color: '#4900FF', '&.Mui-checked': { color: '#4900FF' } }}
                />
              }
            />
            <FormControlLabel
              value='#9600FF'
              labelPlacement='start'
              control={
                <Radio
                  size={mdUp ? 'medium' : 'small'}
                  sx={{ color: '#9600FF', '&.Mui-checked': { color: '#9600FF' } }}
                />
              }
            />
            <FormControlLabel
              value='#FF00C1'
              labelPlacement='start'
              control={
                <Radio
                  size={mdUp ? 'medium' : 'small'}
                  sx={{ color: '#FF00C1', '&.Mui-checked': { color: '#FF00C1' } }}
                />
              }
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default CheckboxChangeColor;
