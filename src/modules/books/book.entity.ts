import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm'
import { Category } from '../categories/category.entity'
import { Author } from '../authors/author.entity'
import { Comments } from '../comments/comment.entity'
import { User } from '../users/user.entity'

@Entity({name: 'book'})
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    bookId: number
    
    @Column({type: 'varchar', length: 12, nullable: false, unique: true})
    title: string
    
    @Column({type: 'varchar', length: 4, nullable: false})
    pages: number
    
    @Column({type: 'varchar', length: 4, nullable: false})
    year: number
    
    @Column({type: 'varchar', length: 12, nullable: false, default: 'alive'})
    price: string
    
    @Column({type: 'varchar', nullable: false, length: 15})
    country: string
    
    @Column({type: 'text', nullable: false})
    description: string
    
    @Column({type: 'text', nullable: false})
    image: string
    
    @ManyToOne(() => Category, (category) => category.books)
    category: Category[];
    
    @OneToMany(() => Comments, (comment) => comment.book)
    comments: Comments[]
    
    @ManyToOne(() => User, (user) => user.books)
    user: User
  
    @ManyToOne(() => Author, (author) => author.books)
    author: Author
}