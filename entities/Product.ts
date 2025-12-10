// entities/Product.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    category: string

    @Column("float")
    price: number

    @Column("int")
    stock: number

    @Column("float")
    rating: number

    @Column()
    imageUrl: string
}