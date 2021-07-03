const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51J92yiFqFMMNwT43nWzZJSkH3uluifi9MLumM1ek4HzcrUWv8TYWjU7nGWo1AVGv4dBF0Muqu5qkR0jlRoORtM0b00kNVSLE8e"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", async (request, response) =>
  response.status(200).send("hello world")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received boom! for this amount =>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-64600/us-central1/api
