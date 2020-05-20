const { PrismaClient } = require('@prisma/client');
const faker = require('faker');
const prisma = new PrismaClient();

async function main() {
	const randomName = faker.name.findName(); // Rowan Nikolaus
	const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
	await prisma.user.create({
		data: {
			name: randomName,
			email: randomEmail,
			posts: {
				create: { title: 'Hello World' },
			},
		},
	});
	const allUsers = await prisma.user.findMany({
		include: {
			posts: true,
		},
	});
	console.dir(allUsers, { depth: null });
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.disconnect();
	});
