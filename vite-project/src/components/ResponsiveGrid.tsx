import Box from '@mui/system/Box';
import Grid from '@mui/system/Grid';
import styled from '@mui/system/styled';
import ImgMediaCard from './ImgMediaCard';

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
