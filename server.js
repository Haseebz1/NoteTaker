const express = require ("express");
const app = express();
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");



const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// app.get('/', (req. res) => 
// res.sendFile()





app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
