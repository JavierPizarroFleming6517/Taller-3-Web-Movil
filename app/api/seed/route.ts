import { NextResponse } from "next/server";
import { getDataSource } from "@/lib/db"; 
import { Product } from "@/entities/Product";

export async function GET() {
  const dataSource = await getDataSource();
  const productRepo = dataSource.getRepository(Product);

  await productRepo.clear();

  const categories = ["Computación", "Audio", "Fotografía", "Celulares", "Gaming"];
  const productsToSave = [];


  for (let i = 1; i <= 50; i++) {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomPrice = Math.floor(Math.random() * (1500000 - 10000) + 10000);
    const randomStock = Math.floor(Math.random() * 100);
    const randomRating = parseFloat((Math.random() * (5 - 1) + 1).toFixed(1));

    const product = new Product();
    product.name = `Producto ${randomCategory} ${i}`;
    product.category = randomCategory;
    product.price = randomPrice;
    product.stock = randomStock;
    product.rating = randomRating;
    product.imageUrl = `https://placehold.co/200x200?text=Prod+${i}`;
    
    productsToSave.push(product);
  }


  await productRepo.save(productsToSave);

  return NextResponse.json({ message: "¡Base de datos llenada con 50 productos!" });
}