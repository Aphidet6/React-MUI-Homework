import { Box, CardActions, Button } from '@mui/material'

export default function CheckoutFrom () {
return (
  <Box component="section" sx={{ p: 5, textAlign: 'center' }}>
        <h1 style={{fontSize: 40}}>Checkout form</h1>
        <p style={{lineHeight: 2}}>Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
        </p>

</Box>
)
}