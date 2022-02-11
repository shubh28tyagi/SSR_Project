import express from 'express';
import 'babel-polyfill';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import StaticRouter from 'react-router';
import MyRoutes from './src/Routes/MyRoutes';
import Home from './src/Components/Home'
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.get("*", (req, res)=>{

    const context = {}

    const content = ReactDOMServer.renderToString(
        <Home/>
    );

    const html = `
        <html>
           <head> </head>
           <body>
            <div id="root"> 
              ${content}
            </div>
            <script src="client_bundle.js"></script>
           </body>
        </html>
    `;

    res.send(html);
})

app.listen(port, ()=>{
   console.log("App listing on port " + port);
});

