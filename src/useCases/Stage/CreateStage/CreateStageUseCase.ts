import { ICreateStageDTO } from './CreateStageDTO';
import { IStageRepository } from '../../../repositories/StageRepository/IStageRepository';

export class CreateStageUseCase {
  constructor(private stageRepository: IStageRepository) {}

  public async execute(dto: ICreateStageDTO): Promise<void> {
    if (dto.type === 2 && isNaN(+dto.value)) throw new Error('Valor não é um número.');

    if (dto.value.toString().length <= 0) throw new Error('Valor inválido.');

    await this.stageRepository.createAndSave(dto);
  }
}
