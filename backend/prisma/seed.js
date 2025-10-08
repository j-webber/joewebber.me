import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData = {
  username: "joewebber",
  password: "$2b$10$7ZhnGCinThWmmj7RXLCZ1edMHqH2WeLVRhSFICbiPKcRiRPUTYh4e",
  name: "Joe Webber"
};
async function main() {
  console.log(`Start seeding ...`);

  const user = await prisma.user.create({
    data: userData
  });
  console.log(`Created user with id: ${user.id}`);

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
