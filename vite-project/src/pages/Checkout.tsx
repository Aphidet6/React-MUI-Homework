import CheckoutFrom from '../components/CheckoutFrom'
import BillingAddress from '../components/BillingAddress'
import Cart from '../components/Cart'


const Checkout = () => {
  return (
    <div style={{margin: '0 50px 0 50px',}}>
      <CheckoutFrom />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <BillingAddress />
        <Cart />
      </div>
      
    </div>
  )
}

export default Checkout