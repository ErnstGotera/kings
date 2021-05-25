const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const productData = [
  {
    name: 'Airpods Headphones',
    price: 89.99,
    category: 'Electronics',
    subcategory: 'Music',
    description: 'Bluetooth technology you to take calls while working',
  },
  {
    name: 'iPhone 11 Pro',
    price: 599.99,
    category: 'Phones',
    description: 'Introducing the iPhone 11 Pro. A transformative',
  },
  {
    name: 'Cannon EOS Camera',
    price: 999.99,
    category: 'Electronics',
    description: 'Characterized by versatile imaging specs, the Canon',
  },
  {
    name: 'Sony Playstation 4 Pro',
    price: 399.99,
    category: 'Electronics',
    subcategory: 'Consoles',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are',
  },
  {
    name: 'Logitech G-Series',
    price: 59.99,
    category: 'Electronics',
    description: 'Get a better handle on your games with this Logitech',
  },
  {
    name: 'Airpods Headphones',
    price: 89.99,
    category: 'Electronics',
    subcategory: 'Music',
    description: 'Bluetooth technology you to take calls while working',
  },
  {
    name: 'iPhone 11 Pro',
    price: 599.99,
    category: 'Phones',
    description: 'Introducing the iPhone 11 Pro. A transformative',
  },
  {
    name: 'Cannon EOS Camera',
    price: 999.99,
    category: 'Electronics',
    description: 'Characterized by versatile imaging specs, the Canon',
  },
  {
    name: 'Sony Playstation 4 Pro',
    price: 399.99,
    category: 'Electronics',
    subcategory: 'Consoles',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are',
  },
  {
    name: 'Logitech G-Series',
    price: 59.99,
    category: 'Electronics',
    description: 'Get a better handle on your games with this Logitech',
  },
  {
    name: 'Airpods Headphones',
    price: 89.99,
    category: 'Electronics',
    subcategory: 'Music',
    description: 'Bluetooth technology you to take calls while working',
  },
  {
    name: 'iPhone 11 Pro',
    price: 599.99,
    category: 'Phones',
    description: 'Introducing the iPhone 11 Pro. A transformative',
  },
  {
    name: 'Cannon EOS Camera',
    price: 999.99,
    category: 'Electronics',
    description: 'Characterized by versatile imaging specs, the Canon',
  },
  {
    name: 'Sony Playstation 4 Pro',
    price: 399.99,
    category: 'Electronics',
    subcategory: 'Consoles',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are',
  },
  {
    name: 'Logitech G-Series',
    price: 59.99,
    category: 'Electronics',
    description: 'Get a better handle on your games with this Logitech',
  },
  {
    name: 'Airpods Headphones',
    price: 89.99,
    category: 'Electronics',
    subcategory: 'Music',
    description: 'Bluetooth technology you to take calls while working',
  },
  {
    name: 'iPhone 11 Pro',
    price: 599.99,
    category: 'Phones',
    description: 'Introducing the iPhone 11 Pro. A transformative',
  },
  {
    name: 'Cannon EOS Camera',
    price: 999.99,
    category: 'Electronics',
    description: 'Characterized by versatile imaging specs, the Canon',
  },
  {
    name: 'Sony Playstation 4 Pro',
    price: 399.99,
    category: 'Electronics',
    subcategory: 'Consoles',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are',
  },
  {
    name: 'Logitech G-Series',
    price: 59.99,
    category: 'Electronics',
    description: 'Get a better handle on your games with this Logitech',
  },
  {
    name: 'Airpods Headphones',
    price: 89.99,
    category: 'Electronics',
    subcategory: 'Music',
    description: 'Bluetooth technology you to take calls while working',
  },
  {
    name: 'iPhone 11 Pro',
    price: 599.99,
    category: 'Phones',
    description: 'Introducing the iPhone 11 Pro. A transformative',
  },
  {
    name: 'Cannon EOS Camera',
    price: 999.99,
    category: 'Electronics',
    description: 'Characterized by versatile imaging specs, the Canon',
  },
  {
    name: 'Sony Playstation 4 Pro',
    price: 399.99,
    category: 'Electronics',
    subcategory: 'Consoles',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are',
  },
  {
    name: 'Logitech G-Series',
    price: 59.99,
    category: 'Electronics',
    description: 'Get a better handle on your games with this Logitech',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const p of productData) {
    const product = await prisma.product.create({
      data: p,
    });
    console.log(`Created product with id: ${product.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
