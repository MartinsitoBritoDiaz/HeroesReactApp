import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher: string) => {
    const verifyPublishers = ['DC Comics', 'Marvel Comics'];
    if(!verifyPublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
}