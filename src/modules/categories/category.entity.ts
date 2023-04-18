import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm'
import { Book } from '../books/book.entity'

@Entity({name: 'categories'})
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    categoryId: number

    @Column({type:'varchar',length: 32, nullable: false})
    name: string

    @OneToMany(() => Book, (book) => book.category)
    books: Book[]
}


//insert into categories(name) values ('Temuriylar davri'), ('Mustaqillik davri'), ('Adabiyot'), ('Fantastika'), ('Asarlar'), ('Ertak')