import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Camera from '../assets/Camera.jpg';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));

export default function CardProduct() {
  return (
    <Card sx={{minWidth: 200 ,maxWidth: 900,  borderRadius: 0, padding: 0, border: 'none'}}>
      <CardMedia
        component="img"
        alt="thumbnail"
        height="auto"
        image={Camera}
      />
      <CardContent sx={{ display: 'flex',  justifyContent: 'start', border: 'none'}}>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 'Bold', border: 'none' }} >
          Stock(75/100)
        </Typography>
      </CardContent>
              <Box sx={{ position: 'relative', flexGrow: 1, m: 2, alignSelf: 'center', border: 'none' }}>
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                  <BorderLinearProgress 
                    variant="determinate"
                    value={75}
                    sx={{ height: 15, borderRadius: 5, marginBottom: 2, marginRight: 2 }} />
                </Stack>
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
