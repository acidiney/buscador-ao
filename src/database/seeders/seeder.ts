import { Injectable, Logger } from "@nestjs/common";
import { ProvincesService } from "src/provinces/provinces.service";
import { data as provincesSeed } from "./provinces/data";

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly provinceService: ProvincesService
  ) {}

  async seed() {
    this.logger.debug("Seeding...");

    // All the seeds to be processed
    await this.seedProvinces();
    this.logger.debug("Provinces seed is finished! :)");
  }

  private async seedProvinces() {
    let isAlreadySeeded = false;

    provincesSeed.forEach(async province => {
      try {
        if (!!(await this.provinceService.findByName(province.name))) {
          isAlreadySeeded = true;

          this.logger.debug(`Province ${province.name} already seeded!`);
        }
      } catch(error) {
        this.logger.error('[SEEDER]: Error while looking for seeded province on the database.');
      }
      
      if (isAlreadySeeded === false) {
        try {
          await this.provinceService.create(province);
        } catch (error) {
          this.logger.error('[SEEDER]: Error while trying to seed the database.');
        }
      }
    });

    return isAlreadySeeded;
  }
}
