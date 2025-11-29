const express = require("express"); 

const app = express();    

const PORT = 3000;                    
const HOST = "0.0.0.0";               

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Local: http://localhost:${PORT}`);
  console.log(`Network: http://${HOST}:${PORT}`);
});
