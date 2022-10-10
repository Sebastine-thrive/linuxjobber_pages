// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

// const marks = [
//     {
//         value: 0,
//         label: '0°C',
//     },
//     {
//         value: 20,
//         label: '20°C',
//     },
//     {
//         value: 37,
//         label: '37°C',
//     },
//     {
//         value: 100,
//         label: '100°C',
//     },
// ];

// function valuetext(value) {
//     return `${value}°C`;
// }

// export default function DiscreteSliderLabel() {
//     return (
//         <Box sx={{ width: 300 }}>
//             <Slider
//                 aria-label="Always visible"
//                 defaultValue={80}
//                 getAriaValueText={valuetext}
//                 step={10}
//                 marks={marks}
//                 valueLabelDisplay="on"
//             />
//         </Box>
//     );
// }


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

import './slider.css'
// import VolumeUp from '@mui/icons-material/VolumeUp';


const Input = styled(MuiInput)`
  width: 42px;

  border-radius: 17px
`;

export default function InputSlider() {
    const [value, setValue] = React.useState(1);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 1) {
            setValue(1);
        } else if (value > 0) {
            setValue(value);
        }
    };

    return (
        <Box sx={{
            width: 400,


        }}>
            <Typography id="input-slider" gutterBottom>
            </Typography>
            <Grid container spacing={0.5} >
                <Grid item>
                </Grid>
                <Grid item xs>
                    <Slider
                    style={{width:250, height:8, marginLeft:0, marginTop:-30}}
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        min={0}
                        max={10}
                        defaultValue={1}
                        step = {1}
                        valueLabelDisplay='auto'
                        marks
                    />
                </Grid>
                {/* <Grid item>
                    <Input
                        value={value}
                        size="large"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 1,
                            max: 10.00,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid> */}
            </Grid>
        </Box>
    );
}
