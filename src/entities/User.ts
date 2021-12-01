import { uuid } from 'uuidv4';
import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToMany } from 'typeorm';

import { Maintenance } from './Maintenance';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn()
  public readonly id!: string;

  @Column()
  public login!: string;

  @Column()
  public password!: string;

  @CreateDateColumn()
  public createdAt!: Date;

  @OneToMany(() => Maintenance, maintenance => maintenance.user)
  public maintenances?: Maintenance[];

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
