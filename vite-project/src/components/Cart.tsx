import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

export default function Cart() {
  return (
    <Box sx={{ width: '30%' }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <h2>Your cart</h2>
            <h3 style={{border: '10px solid gray', borderRadius: 100, overflow: 'hidden', color: 'white', backgroundColor: 'gray'}}>3</h3>
        </div>
        <Item sx={{p:0, overflow: 'hidden'}}>
          <Stack spacing={0.2} sx={{width: '100%'}}>
          <Item square>
            <div>
                <h3>Product name</h3>
                <p>Bridf description</p>
            </div>
            <div>
                <p>$12</p>
            </div>
          </Item>
          <Item square>
            <div>
                <h3>Second product</h3>
                <p>Bridf description</p>
            </div>
            <div>
                <p>$8</p>
            </div>
          </Item>
          <Item square>
            <div>
                <h3>Third item</h3>
                <p>Bridf description</p>
            </div>
            <div>
                <p>$5</p>
            </div>
          </Item>
          <Item square sx={{backgroundColor: '#f5f5f5', color: 'green'}}>
            <div>
                <h3>Product name</h3>
                <p>Bridf description</p>
            </div>
            <div>
                <p>$12</p>
            </div>
          </Item>
          <Item square>
            <div>
                <h3>Total(USD)</h3>
            </div>
            <div>
                <p>$20</p>
            </div>
          </Item>
          </Stack>
        </Item>
    

    <Item sx={{mt: 3}}>
        <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{width: '100%'}}>
            <TextField fullWidth id="outlined-basic" label="Promo code" variant="outlined" />
            <Button variant='contained' color='inherit'>Redeem</Button>
      </ButtonGroup>
        <div>
            
        </div>
        
    </Item>

    </Box>
  );
}
