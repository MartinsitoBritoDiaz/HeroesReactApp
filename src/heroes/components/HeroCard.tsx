import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}: any) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="card-hero">
      <div className="card--header">
        <img src={heroImageUrl} className="card-img" alt={superhero} />
      </div>
      <div className="card--description">
        <h5 className="card-hero--title">{superhero}</h5>
        <p className="card-text">{alter_ego}</p>

        <p className="card-text">
          <small className="text-muted">{first_appearance}</small>
        </p>

        <Link to={`/hero/${id}`}>
          <div className="link--container">
            <img className="animate__animated animate__flash link-img" src="/assets/superman.png"></img>
          </div>
        </Link>
      </div>
    </div>
  );
};
