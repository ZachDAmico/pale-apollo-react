//
// shirt price_1TblytCp2AIg2GkuyYEVKHZ3
// sticker price_1Tc3fbCp2AIg2GkuidTs3EfB


// this loads .env file so process.env works
require("dotenv").config();
const express = require("express");
// cors allows frontend(which is 5173) to talk to backend port 4000
let cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.static("public"));
// this allows express to read json
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
    success_url: "https://paleapolloband.com/success",
    cancel_url: "https://paleapolloband.com/cancel",
  });

  //   because session is await, this will wait until session is fully loaded to send that created session url to the front end so user can checkout
  response.json({ url: session.url });
});

app.get("/shows", async (request, responseToFront) => {
  // this is making the GET request, knows what to target based on the url, the API key proves i have access
  const showDataFromBIT = await fetch(
    `https://rest.bandsintown.com/artists/Pale%20Apollo/events/?app_id=${process.env.BANDSINTOWN_API_KEY}`,
  );
  // this is the returned data(showData) converted from the response object into what javascript needs - think of it like unwrapping the unreadable object
  const data = await showDataFromBIT.json();
// this sends the readable json data back to the front end to display
  responseToFront.json(data)
});


const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);

// .listen gives the server the port to run, console.log is just double checking for now
app.listen(4000, () => console.log("Listening on port 4000"));
