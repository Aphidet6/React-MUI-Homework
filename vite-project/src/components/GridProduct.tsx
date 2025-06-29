
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardProduct from '../components/CardProduct'
import GridProductName from '../components/GridProductName'
import Rating from './Rating'
import Reviews from './Reviews'

export default function GridProduct() {
  return (
    <Box sx={{ 
      flexGrow: 1,// flexGrow: 1 เป็นการกำหนดให้ Box ขยายตัวเต็มพื้นที่ที่ว่างอยู่
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: '0 10%'
      }}>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 12, md: 12 }} sx={{ padding: 0 }}>
        {/* การตั้งค่า columns={{ xs: 1, sm: 12, md: 12 }} จะทำให้ Grid มี 12 คอลัมน์ในทุกขนาดหน้าจอ */}
        {/* เมื่อหน้าจอมีขนาดเล็กกว่า 600px (xs) จะมี 1 คอลัมน์ */}
        {/* เมื่อหน้าจอมีขนาดตั้งแต่ 600px (sm) ขึ้นไป จะมี 12 คอลัมน์ */}
        
          <Grid size={6}>
            <CardProduct />
          </Grid>
          <Grid size={6}  sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <GridProductName />
          </Grid>
          <Grid size={12}>
            <Rating />
          </Grid>
          <Grid size={12}>
            <Reviews />
          </Grid>
      </Grid>
    </Box>
  );
}
