import { Injectable, Logger } from "@nestjs/common"
import { StatesService } from "src/app/services/states.service"
import { data as statesSeed } from "./states/data"

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly statesService: StatesService
  ) {}

  async seed() {
    this.logger.debug("Seeding...")

    // All the seeds to be processed
    await this.seedStates()
    this.logger.debug("Statess seed is finished! :)")
  }

  private async seedStates() {
    let isAlreadySeeded = false

    statesSeed.forEach(async (state) => {
      try {
        if (!!(await this.statesService.findByName(state.name))) {
          isAlreadySeeded = true

          this.logger.debug(`States ${state.name} already seeded!`)
        }
      } catch (error) {
        this.logger.error(
          "[SEEDER]: Error while looking for seeded states on the database."
        )
      }

      if (isAlreadySeeded === false) {
        try {
          await this.statesService.create(state)
        } catch (error) {
          this.logger.error(
            "[SEEDER]: Error while trying to seed the database."
          )
        }
      }
    })

    return isAlreadySeeded
  }
}
