export async function GET() {
  const products = [
    {
      id: "p1",
      name: "Laptop",
      price: 1199,
      category: "Electronics",
      stock: 5,
    },

    {
      id: "p2",
      name: "Phone",
      price: 899,
      category: "Electronics",
      stock: 4,
    },

    {
      id: "p3",
      name: "Headphones",
      price: 129,
      category: "Electronics",
      stock: 0,
    },

    {
      id: "p4",
      name: "Desk Chair",
      price: 149,
      category: "Furniture",
      stock: 3,
    },

    {
      id: "p5",
      name: "Bookshelf",
      price: 99,
      category: "Furniture",
      stock: 6,
    },

    {
      id: "p6",
      name: "Coffee Table",
      price: 179,
      category: "Furniture",
      stock: 2,
    },

    {
      id: "p7",
      name: "Novel",
      price: 18,
      category: "Books",
      stock: 12,
    },

    {
      id: "p8",
      name: "Cookbook",
      price: 28,
      category: "Books",
      stock: 7,
    },

    {
      id: "p9",
      name: "Notebook Set",
      price: 14,
      category: "Books",
      stock: 20,
    },

    {
      id: "p10",
      name: "Desk Lamp",
      price: 35,
      category: "Electronics",
      stock: 9,
    },
  ];
  return Response.json(products);
}
