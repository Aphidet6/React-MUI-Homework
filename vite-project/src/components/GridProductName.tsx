import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
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
          </Item>

        </Grid>
        <Grid size={12}>
          <Item>size=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
