const { Router } = require("express");

const {
	createPublication,
	deletePublication,
	editPublication,
	getAllPublications,
	getPublicationsByID,
	getPublicationsByName,
	restorePublication,
	getSoftDeletedPublication,
	filters,
} = require("../controllers/index");

const router = Router();
router.get("/filters", filters);
router.get("/all", getAllPublications);
router.get("/:id", getPublicationsByID);
router.get("/", getPublicationsByName);

router.post("/", createPublication);
router.delete("/:id", deletePublication);
router.put("/:id", editPublication);

router.put("/restore/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const result = await restorePublication({ id });
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error);
	}
});

router.get("/softDeleted", async (req, res) => {
	try {
		const deletedPublication = await getSoftDeletedPublication();
		res.status(200).json(deletedPublication);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

module.exports = router;
