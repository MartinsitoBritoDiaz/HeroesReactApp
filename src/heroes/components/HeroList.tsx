import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher} : any) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]);
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
