import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher} : any) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <div className="hero--list">
        {
            heroes.map( heroe => (
                <HeroCard 
                    key={heroe.id}
                    { ...heroe }
                />
            ))
        }
    </div>
  );
};
