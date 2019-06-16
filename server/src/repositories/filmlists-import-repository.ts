import { EntityRepository } from '@common-ts/database';
import { FilmlistImport } from '../model/filmlist-import';

export interface FilmlistImportRepository extends EntityRepository<FilmlistImport> {
  setProcessed(id: string, data: { processedTimestamp: number, numberOfEntries: number }): Promise<void>;
  hasFilmlist(filmlistId: string): Promise<boolean>;
}