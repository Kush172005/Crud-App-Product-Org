import { db } from "../models/user.model.js";

const display = async (req, res) => {
    try {
        const data = await db.find({});
        res.json({ Products: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while retrieving products.",
        });
    }
};

export { display };
