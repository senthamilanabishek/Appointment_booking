import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";
import Stripe from "stripe";

export const getCheckoutSession = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.doctorId);
        const user = await User.findById(req.userId);

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        const quantity = 1; // Assuming you are selling one unit at a time

        // Validate quantity
        if (isNaN(quantity) || quantity <= 0) {
            return res.status(400).json({ success: false, message: "Invalid quantity" });
        }

        // Create stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
            customer_email: user.email,
            client_reference_id: req.params.doctorId,
            line_items: [
                {
                    price_data: {
                        currency: 'bdt',
                        unit_amount: doctor.ticketPrice * 100, // Stripe uses cents, hence multiply by 100
                        product_data: {
                            name: doctor.name,
                            description: doctor.bio,
                            images: [doctor.photo],
                        },
                    },
                    quantity: quantity // Quantity should be outside of price_data
                }
            ],
        });

        // Create new booking
        const booking = new Booking({
            doctor: doctor._id,
            user: user._id,
            ticketPrice: doctor.ticketPrice,
            session: session.id,
        });

        await booking.save();

        res.status(200).json({ success: true, message: 'Successfully created checkout session', session });
    } catch (err) {
        console.error("Error creating checkout session:", err);
        res.status(500).json({ success: false, message: "Error creating checkout session" });
    }
};
