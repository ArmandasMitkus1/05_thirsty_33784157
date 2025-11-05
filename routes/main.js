// Create a new router
const express = require("express");
const router = express.Router();

// Define our data (Part B + extensions)
const shopData = {
  shopName: "The Thirsty Student",
  productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
  shops: [
    {
      name: "New Cross",
      manager: "Sam Patel",
      address: "123 High Street, London SE14"
    },
    {
      name: "Deptford",
      manager: "Mia Khan",
      address: "42 Creek Road, London SE8"
    }
  ]
};

// ---------------------
// Part A: basic pages
// ---------------------
router.get("/", (req, res) => {
  res.render("index.ejs", shopData);
});

router.get("/about", (req, res) => {
  res.render("about.ejs", shopData);
});

router.get("/search", (req, res) => {
  res.render("search.ejs", shopData);
});

// ---------------------
// Part C: search (GET)
// ---------------------
router.get("/search_result", (req, res) => {
  const { search_text, category } = req.query;
  res.render("search_result.ejs", {
    ...shopData,
    search_text: search_text || "",
    category: category || ""
  });
});

// ---------------------
// Part D: register (POST)
// ---------------------
router.get("/register", (req, res) => {
  res.render("register.ejs", shopData);
});

function isValidEmail(email = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post("/registered", (req, res) => {
  const { first, last, email } = req.body;

  if (!first || !last || !email || !isValidEmail(email)) {
    return res.status(400).send(
      "Invalid registration. Please go back and ensure first name, last name and a valid email are provided."
    );
  }

  res.render("registered.ejs", {
    ...shopData,
    first,
    last,
    email
  });
});

// ---------------------
// Part E: survey
// ---------------------
router.get("/survey", (req, res) => {
  res.render("survey.ejs", shopData);
});

router.post("/survey_submit", (req, res) => {
  const { first, last, email, age, category, isStudent } = req.body;

  const survey = {
    first: first || "",
    last: last || "",
    email: email || "",
    age: age || "",
    category: category || "",
    isStudent: !!isStudent
  };

  res.render("survey_result.ejs", {
    ...shopData,
    survey
  });
});

// Export the router object so index.js can access it
module.exports = router;
