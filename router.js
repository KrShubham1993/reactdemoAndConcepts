const router = require('express').Router();
const authenticate = require('./middlewares/auth');
const path = require('path');
const Fav = require('./models/favourites');
// const renderToString = require('react-dom/server');

const users = [
    {name: 'raj', password: 'a12'},
    {name: 'aman', password: 'b12'},
    {name: 'alok', password: 'a12'},
    {name: 'ashok', password: 'ac12'},
    {name: 'rahul', password: 'akks12'},
    {name: 'suresh', password: 'y12'}
]

router.get('/', 
    authenticate,
    (req,res,next) => {
        console.log('\n\n\ninside router.get /');
        return res.redirect('/fav');
    }
)

router.get('/fav',
    authenticate, 
    (req, res, next) => {
        console.log('\n\n\n ------------- Entered  GET  /fav -------------');
        res.render('fav');
})

router.get('/getfoods', async(req, res) => {
    const user = req.session.user;
    const query = Fav.findOne({'user': user});
    query.select('favourites');
    const result = await query.exec();
    if(result) {
        const doc = result._doc;
        const foods = {foods: doc.favourites};
        console.log('foods = ', foods);
        console.log('foods.foods = ', foods.foods);
        return res.json(foods);
    } else return res.json({foods: []});
})

router.post('/submitfood', authenticate, async (req,res) => {
        console.log('\n\n\n  entered /submit food');
        console.log('req.originalUrl ------------------------------------->  ', req.originalUrl);
        const {food} = req.body;
        const user = req.session.user;
        const query = Fav.findOne({'user': user});
        query.select('favourites');
        const doc = await query.exec();
        let fav = {};
        if(doc) {
            doc.favourites.push(food);
            
            doc.save().then(res => {
                console.log('updated doc = ', result);
                return res.json({result})
            })

            var result = await doc.save()
            console.log('updated doc = ', result);
            return res.json({result})
        } else {
            fav = new Fav({
                user,
                favourites: [food]
            })
            var result = await fav.save();
            console.log('NEW saved doc = ', result);
            res.json({result});
        }
})





router.post('/submitLoginDetails', 
    (req, res) => {
        console.log('\n\n\n ------------- Entered  POST  /login -------------');
        console.log('req.sessionID --> ', req.sessionID);
        console.log('req.session ====>  ', req.session);
        console.log('req.cookies ====>  ', req.cookies);
        console.log('req.signedCookies ====>  ', req.signedCookies);
        const {username, password} = req.body;
        let isExistingUser = false;
        users.forEach((user, i)=>{
            if(user.name === username && user.password === password) {
                isExistingUser = true;
                return;
            }
        })
        if(isExistingUser) {
            req.session.isAuthenticated = true;
            req.session.user = username;
            req.session.cookie.maxAge = 60 * 60 * 1000; // Session will expire after 1 hour
            console.log('---------   about to render fav --------')
            return res.status(200).json({msg: 'logged in'});
        }        
    }
)

// router.get('/login',
//     (req, res, next) => {
//         console.log('\n\n\n ------------- Entered  GET  /login -------------');
//         res.redirect('/fav');
// })

module.exports = router;