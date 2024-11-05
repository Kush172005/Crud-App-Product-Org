import { db } from "../models/user.model.js";

const Adduser = async (req, res) => {
    try {
        const { ProductName, ProductPrice, ProductDescription } = req.body;

        if (!ProductName || !ProductPrice || !ProductDescription) {
            return res
                .status(400)
                .json({ message: "All fields are required." });
        }

        await db.insertMany({ ProductName, ProductPrice, ProductDescription });
        res.status(201).json({ message: "Product added successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while adding the product.",
        });
    }
};

export { Adduser };
