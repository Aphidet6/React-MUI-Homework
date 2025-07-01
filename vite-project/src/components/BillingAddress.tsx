import {Box , TextField, FormControl, FormControlLabel, Checkbox, FormLabel, RadioGroup, Radio } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export default function BillingAddress() {
  return (
    <Box sx={{ width: '65%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{display:'flex', justifyContent: 'start', width: '100%'}}>
            <h1>Billing address</h1>
        </div>
        <Box sx={{width: '100%',display: 'flex', justifyContent: 'space-between', m:2}}>
            <TextField id="outlined-basic" label="First name" variant="outlined" fullWidth/>
            <TextField id="outlined-basic" label="Last name" variant="outlined" fullWidth sx={{marginLeft: 2}}/>  
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
            <AccountCircle sx={{ color: 'action.active', my: 0.5 }} />
            <TextField fullWidth id="input-with-sx" label="Username" variant="outlined" />
        </Box>
            <TextField id="outlined-basic" label="Email(Optional)" variant="outlined" fullWidth sx={{m: 2}}/>  
            <TextField id="outlined-basic" label="Email(Optional)" variant="outlined" fullWidth/>  
            <TextField id="outlined-basic" label="Address 2(Optional)" variant="outlined" fullWidth sx={{m: 2}}/>  
        <Box sx={{width: '100%',display: 'flex', justifyContent: 'space-between', mb:1}}>
            <TextField id="outlined-basic" label="Country" variant="outlined" fullWidth/>
            <TextField id="outlined-basic" label="State" variant="outlined" fullWidth sx={{marginLeft: 2}}/>  
            <TextField id="outlined-basic" label="Zip" variant="outlined" fullWidth sx={{marginLeft: 2}}/>  
        </Box>
        <hr style={{
              display: 'block',
              marginTop: '0.5em',
              marginBottom: '0.5em',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderStyle: 'inset',
              borderWidth: '1px'
        }}/>
        <div style={{width: '100%'}}>
        <FormControlLabel control={<Checkbox />} label="Shipping address is the same as my billing address" />
        <br />
        <FormControlLabel control={<Checkbox />} label="Save this information for next time" />
        </div>
        <div style={{width: '100%'}}>
            <FormControl sx={{}}>
            <FormLabel id="demo-radio-buttons-group-label">Peyment</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Credit card"
                name="radio-buttons-group"
                
            >
                <FormControlLabel value="Credit card" control={<Radio />} label="Credit card" />
                <FormControlLabel value="Debit card" control={<Radio />} label="Debit card" />
                <FormControlLabel value="Paypal" control={<Radio />} label="Paypal" />
            </RadioGroup>
        </FormControl>
        </div>
        <Box sx={{width: '100%',display: 'flex', justifyContent: 'space-between', m:2}}>
            <TextField id="outlined-basic" label="Name on card" variant="outlined" fullWidth/>
            <TextField id="outlined-basic" label="Credit card number" variant="outlined" fullWidth sx={{marginLeft: 2}}/>  
        </Box>
    </Box>
    
  );
}
