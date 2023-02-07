import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import Cliente from "./client.entitie";
@Entity("telefone")
class Telefone {
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column({type:"varchar", length: 15, unique: true, nullable: false})
    telefone: string
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
    @ManyToOne(() => Cliente, (cliente) => cliente.Telefones ,{onDelete:"CASCADE"})
    cliente: Cliente
}
export default Telefone