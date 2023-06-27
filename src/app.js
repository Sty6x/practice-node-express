const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
	console.log("lol");
	// res.json({ title: "yo", body: "hello" });
	next();
});

app.all("/", (req, res, next) => {
	res.json({ title: "lol" });
}),
	app.listen(8080, () => {
		console.log("listening at port:8080");
		console.log("localhost:8080");
	});
