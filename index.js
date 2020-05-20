const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
	await prisma.post.create({
		data: {
			title: "Hello world!",
			desc: "World is huge!"
		},
	});
	const posts = await prisma.post.findMany();
	console.dir(posts, { depth: null });
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.disconnect();
	});
