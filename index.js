app.set("view engine", "ejs");
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);
app.listen(8000, () => console.log("listening..."));
``` :contentReference[oaicite:3]{index=3}  

