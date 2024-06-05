const path = require('path');



// for server side code else not needed
// const LoginServer = require('../Components/LoginServer');
const LoginPage = require('../Components/LoginServer').default;
console.log('reached ================= ======== ========   ========= ===      ==         =========> ');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
//////



const authenticate = (req, res, next) => {

    console.log('\n\n\n ------------- Entered  auth function -------------');
    console.log('req.originalUrl ------------------------------------->  ', req.originalUrl);
    console.log('req.sessionID ====>  ', req.sessionID);
    console.log('req.session ====>  ', req.session);
    console.log('req.secret ====>  ', req.secret);
    console.log('req.cookies ====>  ', req.cookies);
    console.log('req.signedCookies ====>  ', req.signedCookies);
    if(!req.session.isAuthenticated)    {
        

        /// if server side rendering needed
        console.log('------------- rendering login server side --------------');
        try {
            const loginString = ReactDOMServer.renderToString(<LoginPage />);
            console.log("login String =========== " ,loginString);
            res.render('login', {loginString});
        }catch (err) {
            console.log(err);
        }
        
        ///////


        // res.render('login');
        // console.log('------------- rendering login with client side JS --------------');




        console.log('------------- EXIT auth function --------------')
    }
    else {
        console.log('------------- EXIT auth function ----- Authenticated -- rendering fav --------------')
        next();
    }
}

module.exports = authenticate;