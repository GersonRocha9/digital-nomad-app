import type { City, CityPreview } from '@/src/domain/city/City'
import type { CityFindAllFilters, ICityRepo } from '@/src/domain/city/ICityRepo'

import { cities } from './data/cities'

export class InMemoryCityRepo implements ICityRepo {
  async findAll(filters: CityFindAllFilters): Promise<CityPreview[]> {
    return cities
  }

  async findById(id: string): Promise<City> {
    const city = cities.find((city) => city?.id === id)

    if (city) {
      return city
    }

    throw new Error('City not found')
  }

  async getRelatedCities(cityId: string): Promise<CityPreview[]> {
    const relatedCities = cities.map((city) => city.relatedCitiesIds)

    console.log(relatedCities)

    throw new Error('Related Cities not found')
  }
}
