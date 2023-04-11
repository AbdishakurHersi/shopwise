const ObjectId = require("mongodb").ObjectId;

const reviews = [
  {
    comment:
      "I'm very impressed with this product - it does exactly what it's supposed to do and more, and the quality is top-notch.",
    rating: 5,
    user: { _id: ObjectId(), name: "Sarah" },
  },
  {
    comment:
      "I've been using this product for a while now, and I can confidently say that it's a game-changer - I don't know how I lived without it before.",
    rating: 5,
    user: { _id: ObjectId(), name: "John" },
  },
  {
    comment:
      "This product exceeded my expectations in every way, and I would definitely recommend it to anyone looking for something similar.",
    rating: 5,
    user: { _id: ObjectId(), name: "Tom" },
  },
  {
    comment:
      "While this product is a bit pricey, I think it's worth every penny - the features and performance are unmatched by any other product I've tried.",
    rating: 4,
    user: { _id: ObjectId(), name: "Ayub" },
  },
  {
    comment:
      "I had some initial doubts about this product, but after using it for a while, I can say that it's definitely worth considering if you're in the market for something like this.",
    rating: 4,
    user: { _id: ObjectId(), name: "Steven" },
  },
];

module.exports = reviews;
