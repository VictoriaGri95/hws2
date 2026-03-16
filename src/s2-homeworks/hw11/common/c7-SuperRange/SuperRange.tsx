import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{ // стили для слайдера // пишет студент
        width: '200px',
        color: '#00CC22',
        '& .MuiSlider-thumb': {
          width: '18px',
          height: '18px',
          backgroundColor: '#fff',
          border: '2px solid #00CC22',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '6px',
            height: '6px',
            backgroundColor: '#00CC22',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
          '&:hover': {
            boxShadow: '0 0 0 8px rgba(25, 118, 210, 0.16)',
          },
        },
        '& .MuiSlider-track': {
          height: '4px',
          border: '2px solid #00CC22',
          borderRadius: '4px',
          backgroundColor: '#00CC22',
        },
        '& .MuiSlider-rail': {
          height: '4px',
          border: '2px solid #8B8B8B',
          borderRadius: '4px',
          backgroundColor: '#8B8B8B'
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
