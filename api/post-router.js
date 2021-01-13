const router = require("express").Router();
const PostData = require("./db-helpers");

router.get("/", (req, res) => {
	PostData.find(res.query).then((posts) => {
		res.status(200).json(posts);
	});
});

module.exports = router;
