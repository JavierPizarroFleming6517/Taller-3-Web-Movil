// app/api/products/route.ts
import { NextResponse } from "next/server";
import { getDataSource } from "@/lib/db";
import { Product } from "@/entities/Product";

export async function GET() {
  try {
    const dataSource = await getDataSource();
    const productRepo = dataSource.getRepository(Product);
    
    // Buscamos TODOS los productos
    const products = await productRepo.find();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener productos" }, { status: 500 });
  }
}