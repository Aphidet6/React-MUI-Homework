import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
    height: '300px'
  }),
}));


export default function Rating() {
  return (
    <FormControl sx={{width:'100%'}}>
      <FormLabel id="demo-row-radio-buttons-group-label">
        <Grid size={12}>
          <Item sx={{backgroundColor:'#f5f5f5', borderBottomLeftRadius:0, borderBottomRightRadius:0, border:'none'}}>
            <h3 style={{fontWeight: 'bold'}}>Rate this Product</h3>
          </Item>
        </Grid>
      </FormLabel>
      <Item>
        <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio />} label="1" />
        <FormControlLabel value="2" control={<Radio />} label="2" />
        <FormControlLabel value="3" control={<Radio />} label="3" />
        <FormControlLabel value="4" control={<Radio />} label="4" />
        <FormControlLabel value="5" control={<Radio />} label="5" />
        <Button variant='contained'>Submit Rating</Button>
      </RadioGroup>
      </Item>
      
    </FormControl>
  );
}
