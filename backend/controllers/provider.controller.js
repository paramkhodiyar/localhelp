const prisma = require("../utils/db");

exports.becomeProvider = async (req, res) => {
    try {
        const userId = req.user.id;
        await prisma.user.update({
            where: { id: userId },
            data: { role: "PROVIDER" }
        });
        await prisma.providerProfile.create({
            data: {
                userId,
                bio: null,
                experience: null,
                isVerified: false,
            }
        });

        return res.status(200).json({ 
            message: "User upgraded to provider successfully"
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};
