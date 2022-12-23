import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../helpers';
import { CharactersByHero } from '../components/CharactersByHero';

export const HeroPage = () => {
  const { heroId } = useParams();
  const hero = useMemo( () => getHeroesById(heroId), [ heroId ]); 
  const navigate = useNavigate();

  const onNavigateBack = () => {
    if(hero?.publisher === 'Marvel Comics'){
      navigate('/marvel');
    }else{
      navigate('/dc');
    }
  }
  
  if(!hero){
    return (<Navigate to='/marvel'/>)
  }
  
  return (
    <div className='row mt-5'>
      <div className='col-4 animate__animated animate__fadeInLeft'>
        <img 
          src={`/heroes/${ heroId }.jpg`} 
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className='col-8 animate__animated animate__fadeInRight'>
        <h3 className='fw-bold'>{ hero.superhero }</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Alter ego:</b> {hero.alter_ego} </li>
          <li className='list-group-item'> <b>Publisher:</b> {hero.publisher} </li>
          <li className='list-group-item'> <b>First appearance:</b> {hero.first_appearance} </li>
          <li className='list-group-item'> <b>Alter ego:</b> {hero.alter_ego} </li>
        </ul>

        <CharactersByHero 
          alter_ego={hero.alter_ego}
          characters={hero.characters}
        />

        <button 
          className='btn btn-outline-secondary'
          onClick={ onNavigateBack }
        >
          <img
            src='/return.png'
            alt='return icon'
            className='img-return'
          />
        </button>
      </div>
    </div>
  )
}
