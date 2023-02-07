import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import Cliente from "./client.entitie";
@Entity("usuario")
class Usuario {
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column({type: "varchar", length:120, nullable: false, unique: true})
    username: string
    @Column({type: "varchar", length:120, nullable: false})
    password: string
    @Column({type: "varchar", unique: true, length:11, nullable: false})
    cpf: string
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
    @OneToMany(() => Cliente, (cliente) => cliente.usuario)
    clientes: Cliente[]
}
export default Usuario