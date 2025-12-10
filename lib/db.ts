// lib/db.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "../entities/Product";

const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL, 
    synchronize: true, 
    logging: false,
    entities: [Product],
    ssl: {
        rejectUnauthorized: false, 
    },
});

export const getDataSource = async () => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }
    return AppDataSource;
};