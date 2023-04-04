const { blog } = require("../../db");
/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

const filters = async (req, res) => {
	try {
		const { tag, date, title } = req.query;
		if (!tag && !date) throw Error("tag or query is required");
		if (date && date !== "ancient" && date !== "recent")
			throw Error("date criteria error");

		let allPublications = await blog.findAll({});

		let filteredPublication = [];

		//checking if it has already a search by
		if (title) {
			let allPublicationSearch = await blog.findAll({});
			let publicationName = await allPublicationSearch?.filter((el) =>
				el.title.toLowerCase().includes(title.toLowerCase())
			);
			allPublications = publicationName;
		}

		if (tag) {
			filteredPublication.push(
				...allPublications.filter((blog) => blog.tag.includes(tag))
			);
		} else filteredPublication = allPublications;

		if (date) {
			if (date === "ancient") {
				filteredPublication.sort((a, b) => {
					return b.createdAt.getTime() - a.createdAt.getTime();
				});
			} else if (date === "recent") {
				filteredPublication.sort((a, b) => {
					return a.createdAt.getTime() - b.createdAt.getTime();
				});
			}
		}

		res.status(200).json({
			message: "filter by tag or date",
			querys: { tag, date },
			filteredPublication,
		});
	} catch (error) {
		res.status(400).json({
			error: error.message,
		});
	}
};

module.exports = filters;
