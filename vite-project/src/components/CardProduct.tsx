import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Camera from '../assets/Camera.jpg';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';


export default function CardProduct() {
  return (
    <Card sx={{minWidth: 200 ,maxWidth: 900,  borderRadius: 0, padding: 0, border: 0}}>
      <CardMedia
        component="img"
        alt="thumbnail"
        height="auto"
        image={Camera}
      />
      <CardContent sx={{ display: 'flex',  justifyContent: 'start', border: 0}}>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 'Bold', border:0 }} >
          Stock(75/100)
        </Typography>
      </CardContent>
              <Box sx={{ position: 'relative', flexGrow: 1, ml: 2, alignSelf: 'center' }}>
                <LinearProgress
                  variant="determinate"
                  value={75}
                  sx={{ height: 15, borderRadius: 5, marginBottom: 2, marginRight: 2 }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    pointerEvents: 'none'
                  }}
                >
                  75%
                </Typography>
              </Box>
    </Card>
  );
}
