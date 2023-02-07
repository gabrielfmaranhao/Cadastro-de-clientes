import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne,OneToMany } from "typeorm";
import Usuario from "./user.entitie";
import Email from "./email.entitie";
import Telefone from "./telefone.entitie";
@Entity("cliente")
class Cliente {
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column({type: "varchar", length: 150, nullable: false})
    nome_completo: string
    @Column({type: "varchar", unique: true, length:11, nullable: false})
    cpf: string
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
    @Column({type: "varchar", nullable: false, length: 120})
    criado_por: string
    @ManyToOne(() => Usuario, (usuario) => usuario.clientes)
    usuario: Usuario
    @OneToMany(() => Email, (email) => email.cliente,{onDelete:"CASCADE"})
    emails: Email[]
    @OneToMany(() => Telefone, (telefone) => telefone.cliente, {onDelete:"CASCADE"})
    Telefones: Telefone[]
}
export default Cliente