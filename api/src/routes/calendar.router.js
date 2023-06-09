const { Router } = require('express');

const router = Router();

const {
	getAllCalendar,
	postCalendar,
	putCalendar,
	deleteCalendar,
	restoreCalendar,
	getSoftDeletedCalendar,
} = require('../controllers/index');

router.get('/', async (req, res) => {
	try {
		const response = await getAllCalendar(req.body);

		if (response.error) throw Error(response.error.message);

		res.json(response);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.post('/', async (req, res) => {
	try {
		const { day, month, year, hour } = req.body;
		if (!day || !month || !year || !hour) throw Error('missing data');
		if (!req.body.classes) throw Error('missing data');

		const validatorHour = hour.split(':');
		if (validatorHour.length !== 2) throw Error('error invalid hour');
		if (isNaN(Number(validatorHour[0])) || isNaN(Number(validatorHour[1])))
			throw Error('error invalid hour');

		const response = await postCalendar(req.body);

		if (response.error) throw Error(response.error);

		res.status(200).json(response);
	} catch (error) {
		res.status(400).json({
			error: error.message,
		});
	}
});

router.put('/:id', async (req, res) => {
	try {
		const { day, month, year, hour } = req.body;
		if (!day || !month || !year || !hour) throw Error('missing data');
		if (!req.body.classes) throw Error('missing data');

		const validatorHour = hour.split(':');
		if (validatorHour.length !== 2) throw Error('error invalid hour');
		if (isNaN(Number(validatorHour[0])) || isNaN(Number(validatorHour[1])))
			throw Error('error invalid hour');

		const response = await putCalendar(req.body, req.params);

		if (response.error) throw Error(response.error);
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json({
			error: error.message,
		});
	}
});

router.delete('/:id', deleteCalendar);

router.put('/restore/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const result = await restoreCalendar({ id });
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error);
	}
});

router.get('/softDeleted', async (req, res) => {
	try {
		const deletedCalendar = await getSoftDeletedCalendar();
		res.status(200).json(deletedCalendar);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

module.exports = router;
