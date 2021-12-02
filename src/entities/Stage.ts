import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne } from 'typeorm';

import { Maintenance } from './Maintenance';

enum StageStatus {
  'Etapa em execução',
  'Etapa finalizada',
}

enum StageType {
  'Etapa de texto' = 1,
  'Etapa de número',
  'Etapa de foto',
}

@Entity({ name: 'stages' })
export class Stage {
  @PrimaryColumn()
  public readonly id!: string;

  @ManyToOne(() => Maintenance, maintenance => maintenance.stages)
  public readonly maintenance!: Maintenance;

  @Column()
  public description!: string;

  @Column({ default: 0 })
  public status!: StageStatus;

  @Column()
  public type!: StageType;

  @Column()
  public value!: string;

  @CreateDateColumn()
  public createdAt!: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
