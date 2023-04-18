import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Comments } from '../comments/comment.entity'
import { Book } from '../books/book.entity'

@Entity({name: 'users'})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: 12, nullable: false})
    name: string

    @Column({type: 'varchar', length: 24, nullable: false})
    surname: string

    @Column({type: 'varchar', length: 15, nullable: false})
    phone: string

    @Column({type: 'varchar', length: 25, nullable: false, unique: true})
    email: string

    @Column({type: 'text', nullable: false})
    password: string

    @OneToMany(() => Comments, (comment) => comment.user)
    comments: Comments

    @OneToMany(() => Book, (book) => book.user)
    books: Book[]
}