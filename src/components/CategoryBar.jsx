import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useSelector } from 'react-redux';


const CategoryBar = () => {
  const {categories} =useSelector((state)=>state.productSlice)
  return (
    <FormControl sx={{ width: '100vw', mt:-3
     }}>
      <RadioGroup
        row
        sx={{ justifyContent: 'center' }}
        name="controlled-radio-buttons-group"
        value=""
        onChange=""
      >
        <FormControlLabel value="" control={<Radio />} label="All" />
        {categories.map((category,index)=>(
          <FormControlLabel
          key={index}
          sx={{ textTransform: 'capitalize' }}
          value={category}
          control={<Radio />}
          label={category}
        />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CategoryBar;