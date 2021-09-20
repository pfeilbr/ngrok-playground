const ngrok = require('ngrok');
const http = require("http");
(async function() {

    // const server = http
    //     .createServer(function (req, res) {
    //       res.writeHead(200);
    //       res.end("oki-doki: " + req.url);
    //     })
    //     .listen(80);

    const express = require('express')
    const app = express()
    const port = 3000
    
    app.get('/', (req, res) => {
      res.send('Hello World!')
    })
    
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })    

  const url = await ngrok.connect({addr: port});
  console.log(url);
})();