const { Router } = require("express");

const {
	deleteClient,
	postClient,
	getClientByName,
	updateClientById,
	getAllClients,
	getClientById,
	restoreClient,
	getSoftDeletedClient,
} = require("../controllers/index");

const router = Router();


router.get("/", async (req, res) => {
	const { name, id } = req.query;

	if (id) {
		let clientid = await getClientById(id);
		return res.status(200).send(clientid);
	} else if (name && typeof name === "string") {
		const response = await getClientByName(name);
		return res.json({
			message: "find by name",
			response,
		});
	} else {
		const responseAll = await getAllClients();
		return res.json({
			message: "find all clients",
			responseAll,
		});
	}
});


router.post("/", async (req, res) => {
	try {
		const newClient = await postClient(req.body);
		res.status(200).json(newClient);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const result = await deleteClient(req.params);
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error);
	}
});

router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const data = req.body;

	try {
		const response = await updateClientById(id, data);

		return res.json({
			message: "ruta update funca1",
			response,
		});
	} catch (error) {
		return res.json({
			message: "algo salio mal",
			error: error.message,
		});
	}
});

router.put("/restore/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const result = await restoreClient({ id });
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error);
	}
});

router.get("/softDeleted", async (req, res) => {
	try {
		const deletedClient = await getSoftDeletedClient();
		res.status(200).json(deletedClient);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

module.exports = router;
