import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToMany } from 'typeorm';

import { Maintenance } from './Maintenance';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn()
  public readonly id!: string;

  @Column({ unique: true })
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
