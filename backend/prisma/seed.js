const prisma = require("../utils/db");

async function main() {
  console.log("🌱 Seeding service categories...");

  const categories = [
    {
      name: "Home Services",
      icon: "FaTools",
      subcategories: [
        "Electrician",
        "Plumber",
        "Carpenter",
        "Painter",
        "AC Repair"
      ]
    },
    {
      name: "Cleaning Services",
      icon: "FaBroom",
      subcategories: [
        "Home Cleaning",
        "Kitchen Cleaning",
        "Bathroom Cleaning",
        "Sofa Cleaning"
      ]
    },
    {
      name: "Education",
      icon: "FaChalkboardTeacher",
      subcategories: [
        "Home Tutor",
        "Math Tutor",
        "Coding Tutor",
        "Language Tutor"
      ]
    },
    {
      name: "Pet Care",
      icon: "FaDog",
      subcategories: [
        "Dog Walking",
        "Pet Sitting",
        "Pet Grooming"
      ]
    },
    {
      name: "Home Food",
      icon: "FaUtensils",
      subcategories: [
        "Home Cook",
        "Tiffin Services",
        "Meal Prep"
      ]
    },
  ];

  for (const category of categories) {
    const created = await prisma.serviceCategory.create({
      data: {
        name: category.name,
        icon: category.icon,
        subcategories: {
          create: category.subcategories.map((sub) => ({
            name: sub
          }))
        }
      }
    });

    console.log(`  ✔ Created category: ${created.name}`);
  }

  console.log("🌱 Seeding done!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
