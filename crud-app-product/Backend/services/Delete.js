import { db } from "../models/user.model.js";

const Delete = async (req, res) => {
    try {
        const { _id } = req.body;

        if (!_id) {
            return res.status(400).json({ message: "ID is required." });
        }

        const result = await db.deleteMany({ _id });

        if (result.deletedCount === 0) {
            return res
                .status(404)
                .json({ message: "No product found with the given ID." });
        }

        res.json({ message: "Product deleted successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while deleting the product.",
        });
    }
};

export { Delete };
