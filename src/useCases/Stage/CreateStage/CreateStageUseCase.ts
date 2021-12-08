import { ICreateStageDTO } from './CreateStageDTO';
import { IStageRepository } from '../../../repositories/StageRepository/IStageRepository';

export class CreateStageUseCase {
  constructor(private stageRepository: IStageRepository) {}

  public async execute(dto: ICreateStageDTO): Promise<void> {
    const description = dto.description.trim();

    if (![1, 2, 3].includes(dto.type)) throw new Error('Tipo inválido.');

    if (!description) throw new Error('Descrição inválida.');

    if (description.length < 4) throw new Error('Descrição deve ter pelo menos 4 caracteres.');

    await this.stageRepository.createAndSave(dto);
  }
}
