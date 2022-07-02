const jwt = require("jsonwebtoken");
const createError = require("./error");
const verify = require("./verifyToken");
//tokens expire after long sessions so create new user and then check for token verification and
//implement refresh tokens!!!!!!!!!!!!!!!!!!!!!
exports.tokenVerify = (req, res, next) => {
	const token = req.cookies.access_token;
	if (!token) {
		return next(createError(401, "You are not authenticated!"));
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) return next(createError(403, "Token is not valid!"));
		req.user = user;
		next();
	});
};
//after the token is verified, we verify the user
exports.userVerify = (req, res, next) => {
	verify.tokenVerify(req, res, next, () => {
		//check if the user id stored in the token is equal to the user id entered by the client
		//admin also has the access to user accounts and can therefore delete it
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			return next(createError(403, "User not authorized"));
		}
	});
};
exports.adminVerify = (req, res, next) => {
	verify.tokenVerify(req, res, next, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			return next(createError(403, "User not authorized"));
		}
	});
};
