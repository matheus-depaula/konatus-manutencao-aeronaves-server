import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';

import { User } from './User';
import { Stage } from './Stage';

enum MaintenanceStatus {
  'Manutenção em execução',
  'Manutenção finalizada',
}

@Entity({ name: 'maintenances' })
export class Maintenance {
  @PrimaryColumn()
  public readonly id!: string;

  @ManyToOne(() => User, user => user.maintenances)
  public user!: User;

  @Column()
  public description!: string;

  @Column({ default: 0 })
  public status!: MaintenanceStatus;

  @CreateDateColumn()
  public createdAt!: Date;

  @OneToMany(() => Stage, stage => stage.maintenance)
  public stages?: Stage[];

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
