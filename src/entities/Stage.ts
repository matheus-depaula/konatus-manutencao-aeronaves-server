import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne } from 'typeorm';

import { Maintenance } from './Maintenance';

enum StageStatus {
  'Etapa em execução',
  'Etapa finalizada',
}

export enum StageType {
  'Etapa de texto' = 1,
  'Etapa de número',
  'Etapa de foto',
}

@Entity({ name: 'stages' })
export class Stage {
  @PrimaryColumn()
  public readonly id!: string;

  @ManyToOne(() => Maintenance, maintenance => maintenance.stages)
  public maintenance!: Maintenance;

  @Column()
  public description!: string;

  @Column({ default: 0, type: 'enum', enum: StageStatus })
  public status!: StageStatus;

  @Column({ type: 'enum', enum: StageType })
  public type!: StageType;

  @Column({ type: 'varchar' })
  public value!: string | number;

  @CreateDateColumn()
  public createdAt!: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
