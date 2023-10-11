import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChackoutForm from "./ChackoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe('pk_test_51NxSWMA0EbByqo3YcvfyvhhaXPdIPk1isIhH2RkiVh1u3nPQ0YC81Xcn89ibzRapsLOLfYEfTdHuy3imsbewp2km00Eedktw9T');
const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
            <SectionTitle heading="payment" subHeading="payment provide"></SectionTitle>
            <Elements stripe={stripePromise}>
                <ChackoutForm cart={cart} price={price}></ChackoutForm>
            </Elements>
        </div>
    );
};

export default Payment;