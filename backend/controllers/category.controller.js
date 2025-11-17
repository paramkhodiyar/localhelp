const prisma = require("../utils/db");

async function getCategories(req, res) {
  try {
    const cats = await prisma.serviceCategory.findMany({
      select: {
        id: true,
        name: true,
        icon: true,
        _count: { select: { subcategories: true } },
        subcategories: {
          take: 3, 
          select: {
            id: true,
            name: true,
            _count: { select: { services: true } }
          }
        }
      },
      orderBy: { name: "asc" },
    });

    res.json({ categories: cats });
  } catch (err) {
    console.error("getCategories error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getCategoryById(req, res) {
  try {
    const { id } = req.params;

    const category = await prisma.serviceCategory.findUnique({
      where: { id },
      include: {
        subcategories: {
          include: {
            services: true, 
          },
        },
      },
    });

    if (!category) return res.status(404).json({ message: "Category not found" });

    res.json({ category });
  } catch (err) {
    console.error("getCategoryById error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getCategories,
  getCategoryById
};
