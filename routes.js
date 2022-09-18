const passport = require('passport');
const bcrypt = require('bcrypt');

module.exports = function (app, myDataBase) {
    // Main page
    app.route('/').get((req, res) => {
        res.render('pug', {
            title: 'Connected to Database',
            message: 'Please login',
            showLogin: true,
            showRegistration: true,
            showSocialAuth: true
        });
    });

    // Rerouing from /profile if user is not authenticated
    app.route('/profile').get(ensureAuthenticated, (req,res) => {
        res.render(process.cwd() + '/views/pug/profile', { username: req.user.username });
    });

    // Login authentification
    app.route('/login').post(passport.authenticate('local', { failureRedirect: '/' }), (req, res) => {
        res.redirect('/profile');
    });

    // Logout
    app.route('/logout')
    .get((req, res) => {
        req.logout();
        res.redirect('/');
    });

    // Missing page
    app.use((req, res, next) => {
        res.status(404)
            .type('text')
            .send('Not Found');
    });

    // Register logic
    app.route('/register')
    .post((req, res, next) => {
        myDataBase.findOne({ username: req.body.username }, function(err, user) {
        if (err) {
            next(err);
        } else if (user) {
            res.redirect('/');
        } else {
            const hash = bcrypt.hashSync(req.body.password, 12);
            myDataBase.insertOne({
            username: req.body.username,
            password: hash
            },
            (err, doc) => {
                if (err) {
                res.redirect('/');
                } else {
                next(null, doc.ops[0]);
                }
            }
            )
        }
        })
    },
        passport.authenticate('local', { failureRedirect: '/' }),
        (req, res, next) => {
        res.redirect('/profile');
        }
    );

    // Authentification thru github
    app.route('/auth/github').get(passport.authenticate('github'));
    app.route('/auth/github/callback').get(passport.authenticate('github', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/profile');
  });
}

// Middleware function ensuring user is authenticated
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
    return next();
    }
    res.redirect('/');
};