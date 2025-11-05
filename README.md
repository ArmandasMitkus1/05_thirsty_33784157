# Lab 5 – Thirsty Student Shop (05_thirsty_33784157)

Node.js / Express / EJS web application for the **Thirsty Student Shop** lab.  
Implements EJS views, GET/POST forms, simple validation, and a customer survey.

- **Student ID:** 33784157  
- **VM ID:** 428  
- **Live URL:** <http://www.doc.gold.ac.uk/usr/428/>

---

## Overview

This app is an Express server using **EJS** templates to render pages for a fictional drinks shop, *The Thirsty Student*. It demonstrates:

- Server-side templating with EJS
- Using query strings (GET) and request bodies (POST)
- Basic server-side validation
- Simple form processing and confirmation pages
- Serving static assets (CSS) from a `public` folder

---

## Routes

| Path               | Method | Description                                               |
|--------------------|--------|-----------------------------------------------------------|
| `/`                | GET    | Home page, shows shop name and product categories        |
| `/about`           | GET    | About page, lists shop locations and managers            |
| `/search`          | GET    | Search form (GET), keyword and category fields           |
| `/search_result`   | GET    | Displays query string from the search form               |
| `/register`        | GET    | Registration form: first name, surname, email            |
| `/registered`      | POST   | Confirms registration, with simple email validation      |
| `/survey`          | GET    | Customer survey form (details, age, category, student?)  |
| `/survey_submit`   | POST   | Shows submitted survey answers                           |
| `/healthz`         | GET    | Simple health-check endpoint (returns `200 OK`)          |

---

## Project structure

```text
05_thirsty_33784157/
├─ index.js           # Express app setup, EJS, routes, static, body parser
├─ package.json       # Dependencies: express, ejs
├─ routes/
│  └─ main.js         # All route handlers and shared shop data
├─ views/
│  ├─ index.ejs       # Home page
│  ├─ about.ejs       # About + list of shops/managers
│  ├─ search.ejs      # Search form
│  ├─ search_result.ejs
│  ├─ register.ejs    # Registration form
│  ├─ registered.ejs  # Registration confirmation
│  ├─ survey.ejs      # Survey form
│  └─ survey_result.ejs
├─ public/
│  └─ styles.css      # Simple styling for all pages
├─ .gitignore         # Excludes node_modules
└─ links.txt          # home=http://www.doc.gold.ac.uk/usr/428/
