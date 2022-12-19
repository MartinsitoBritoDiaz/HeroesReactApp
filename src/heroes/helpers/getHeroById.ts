import { heroes } from '../data/heroes';

export const getHeroesById = (heroId: string | undefined) => {
    return heroes.find( hero => hero.id === heroId );
}