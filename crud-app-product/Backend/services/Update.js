import { db } from "../models/user.model.js";

const Update = async (req, res) => {
    try {
        const { _id, ProductName, ProductPrice, ProductDescription } = req.body;

        if (!_id) {
            return res.status(400).json({ message: "ID is required." });
        }

        const data = await db.updateMany(
            { _id: _id },
            {
                ProductName: ProductName,
                ProductPrice: ProductPrice,
                ProductDescription: ProductDescription,
            }
        );

        if (data.modifiedCount === 0) {
            return res
                .status(404)
                .json({ message: "No product found with the given ID." });
        }

        res.json({ message: "Product updated successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while updating the product.",
        });
    }
};

export { Update };
