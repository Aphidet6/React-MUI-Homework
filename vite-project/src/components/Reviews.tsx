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

export default function Reviews() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid size={12}>
          <Item sx={{backgroundColor:'#f5f5f5', borderBottomLeftRadius:0, borderBottomRightRadius:0}}>
            <h3>Reviews</h3>
          </Item>
          <Item sx={{borderRadius:'0'}}>
            <h3>Johe Doe</h3>
            <p style={{paddingBottom: '10px'}}>Great product! I love design and the features. Heighly recommended!</p>
            <hr />
          </Item>
          <Item sx={{borderTopLeftRadius:0, borderTopRightRadius:0}}>
            <h3>Jane Smith</h3>
            <p>Amazing value for the price. It has exceeded my expectations. Will by again!</p>
          </Item>
        </Grid>
    </Box>
  );
}
