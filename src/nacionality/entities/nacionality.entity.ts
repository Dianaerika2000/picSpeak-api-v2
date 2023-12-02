import { IndividualUser } from "src/users/entities/individual-user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";

@Entity({ name: 'nacionality' })
export class Nacionality {
  @PrimaryGeneratedColumn()
    id:number;

    @Column({  name: 'name', nullable: false})
    name:string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at'})
    deletedAt: Date;

    @OneToMany(() => IndividualUser, (individualusers) => individualusers.nacionality)
    individualusers: IndividualUser[]
}
