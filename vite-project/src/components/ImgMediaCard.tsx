import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Camera from '../assets/Camera.jpg';


export default function ImgMediaCard() {
  return (
    <Card sx={{minWidth: 200}}>
      <CardMedia
        component="img"
        alt="Camera thumbnail"
        height="300"
        image={Camera} // Adjust the path to your image
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} >
          This is a card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between',p: 2}}>
        <div>
          <Button variant="outlined" sx={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}>View</Button>
          <Button variant="outlined" sx={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>Edit</Button>
        </div>
        <Typography variant="body2" sx={{ color: 'text.secondary', mr:2 }} >9 mins</Typography>
      </CardActions>
    </Card>
  );
}
