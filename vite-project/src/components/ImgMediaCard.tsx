import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{minWidth: 200}}>
      <CardMedia
        component="img"
        alt="thumbnail"
        height="300"
        image="https://thumbs.dreamstime.com/b/thumbnail-gold-text-black-background-d-rendered-royalty-free-stock-picture-image-can-be-used-online-website-banner-87922025.jpg"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined" sx={{ ml: 0 }}>Edit</Button>
      </CardActions>
    </Card>
  );
}
