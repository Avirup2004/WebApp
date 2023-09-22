const router = require("express").Router();

const {
  About,
  Intro,
  Product,
  Experience,
  Contact,
} = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const products = await Product.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    res.status(200).send({
      intros: intros[0], // [0] because there is only one intro data in the database
      abouts: abouts[0],
      products: products,
      contacts: contacts[0],
      experiences: experiences,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
