import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import Cliente from "./client.entitie";
@Entity("email")
class Email {
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column({type:"varchar", length: 256, unique: true, nullable: false})
    email: string
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
    @ManyToOne(() => Cliente, (cliente) => cliente.emails )
    cliente: Cliente
}
export default Email