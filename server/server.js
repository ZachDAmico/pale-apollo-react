//
// shirt price_1TblytCp2AIg2GkuyYEVKHZ3
// sticker price_1Tc3fbCp2AIg2GkuidTs3EfB

require("dotenv").config();
const express = require("express");
let cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// sending post request to /checkout route
app.post("/checkout", async (request, response) => {
  //  request.body.items
  //  [
  //     {
  //         id: 1,
  //         quantity: 2
  //     }
  //  ]
  //  stripe wants this and calls items lineItems so we'll make new variable to hold what stripe wants
  //  [
  //     {
  //         id: 1,
  //         quantity: 2
  //     }
  //  ]
  //   taking posted data from user
  console.log(request.body);
  const items = request.body.items;
  //   formatting lineItems to be what stripe wants
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  //   creating session with the lineItems and making it a payment session
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  //   because session is await, this will wait until session is fully loaded to send that created session url to the front end so user can checkout
   response.json({ url: session.url });
});

app.listen(4000, () => console.log("Listening on port 4000"));
