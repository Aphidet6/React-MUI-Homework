import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
    height: '300px'
  }),
}));

export default function GridProductName() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Item >
            <h3 style={{fontWeight: 'bold', marginBottom: '5px'}}>Product Name</h3>
            <p>Product descriptin here. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <p style={{fontWeight: 'bold', marginTop: '5px'}}>Price: $99</p>
            <p>Quantity:</p>
            <br />
            <TextField defaultValue={1} sx={{width:'100%', mb:2}}/>
            <Button variant='contained'>Add to Cart</Button>
          </Item>

        </Grid>
        <Grid size={12}>
          <Item sx={{backgroundColor:'#f5f5f5', borderBottomLeftRadius:0, borderBottomRightRadius:0}}>
            <h3>Specifications</h3>
          </Item>
          <Item sx={{borderRadius:'0'}}>Display: 6.1 inches</Item>
          <Item sx={{borderRadius:'0'}}>Resolution: 1080x2400 pixels</Item>
          <Item sx={{borderRadius:'0'}}>Processor: Snapdragon 888</Item>
          <Item sx={{borderRadius:'0'}}>RAM: 8GB</Item>
          <Item sx={{borderRadius:'0'}}>Storage: 120GB</Item>
          <Item sx={{borderTopLeftRadius:0, borderTopRightRadius:0}}>Battery: 4500mAh</Item>

        </Grid>
      </Grid>
    </Box>
  );
}
