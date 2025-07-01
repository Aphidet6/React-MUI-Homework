import Box from '@mui/system/Box';
import Grid from '@mui/system/Grid';
import styled from '@mui/system/styled';
import ImgMediaCard from './ImgMediaCard';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: '#fff',
  border: '1px solid',
  borderColor: '#ced7e0',
  borderRadius: '4px',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
    borderColor: '#444d58',
  }),
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, mx: 10}}>
      <Box component="section" sx={{ p: 5, textAlign: 'center' }}>
        <h1 style={{fontSize: 50}}>Ablum example</h1>
        <p style={{lineHeight: 2}}>Someting short and leading about the collectin below--its contents,<br />
        the cretor, etc. Make it short and sweet, but not too short so floks<br />
        don't simply skip over it entirely.
        </p>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <CardActions>
            <Button variant='contained'>Main call to action</Button>
            <Button variant='contained' color='inherit'>Secondary action</Button>
          </CardActions>
        </Box>
      </Box>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4 }}>
            <Item><ImgMediaCard /></Item>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
}
