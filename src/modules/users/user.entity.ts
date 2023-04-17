import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

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
}