import React from 'react';
import {Link} from 'react-router-dom';

const Notfound = () =>

    <div>
        <head>
            <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>404</title>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:200,400,700" rel="stylesheet"/>
                <link type="text/css" rel="stylesheet" href="not-fount-404.css"/>
            </meta>
        </head>

        <body>

        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                </div>
                <Link to="/">Go to Home </Link>
            </div>
        </div>

        </body>

    </div>
export default Notfound;