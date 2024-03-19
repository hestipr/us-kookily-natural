const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const quiz = require("tea-quiz-commit"),
	usually = require("x-usually-longingly"),
	rarely = require("x-rarely-opposite"),
	attack = require("x-attack-yippee"),
	truly = require("tea-truly-smooth"),
	unlike = require("tea-unlike-often"),
	prod = require("x-prod-yippee"),
	however = require("tea-however-sleep"),
	wearily = require("tea-wearily-well-lit"),
	despite = require("x-despite-cruelly"),
	about = require("tea-about-minor"),
	indeed = require("tea-indeed-workforce"),
	begonia = require("tea-begonia-instead"),
	amend = require("x-amend-beyond"),
	whereas = require("tea-whereas-safely"),
	anguish = require("x-anguish-notarize"),
	dismiss = require("x-dismiss-across"),
	first = require("x-first-boohoo"),
	steel = require("tea-steel-zowie"),
	fondue = require("x-fondue-indolent"),
	playground = require("twt-playground"),
	atop = require("x-atop-twister"),
	numeric = require("x-numeric-police"),
	pfft = require("tea-pfft-along"),
	worse = require("x-worse-clearly"),
	which = require("x-which-frequent"),
	fare = require("x-fare-barring"),
	unearth = require("tea-unearth-promptly"),
	beside = require("tea-beside-yowza"),
	beneath = require("x-beneath-ill-fated"),
	broil = require("x-broil-gadzooks"),
	repent = require("tea-repent-scorn"),
	psst = require("tea-psst-yippee"),
	blah = require("tea-blah-concede"),
	floor = require("tea-floor-align"),
	male = require("tea-male-zowie"),
	infect = require("x-infect-likewise");

const USERNAME = "sandy.corwin27",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
