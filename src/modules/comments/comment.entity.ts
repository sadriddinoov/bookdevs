import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn  } from   'typeorm'
import { User } from '../users/user.entity'
import { Book } from '../books/book.entity'

@Entity({name: 'comment'})
export class Comments extends BaseEntity {
    @PrimaryGeneratedColumn()
    commentId: number

    @Column({type: 'text', nullable: false})
    comment: string

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @ManyToOne(() => Book, (book) =>  book.comments)
    book: Book
}