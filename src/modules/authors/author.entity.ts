import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Book } from '../books/book.entity'

@Entity({name: 'author'})
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn()
    authorId: number

    @Column({type: 'varchar', length: 12, nullable: false})
    name: string

    @Column({type: 'varchar', length: 24, nullable: false})
    surname: string

    @Column({type: 'varchar', length: 12, nullable: false})
    born: string

    @Column({type: 'varchar', length: 5, nullable: false, default: 'alive'})
    died: string

    @Column({type: 'varchar', nullable: false, length: 15})
    country: string

    @Column({type: 'text', nullable: false})
    bio: string

    @Column({type: 'text', nullable: false})
    image: string

    @OneToMany(() => Book, (book) => book.author)
    books: Book[]
}