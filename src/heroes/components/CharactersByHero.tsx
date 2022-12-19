export const CharactersByHero = ({alter_ego, characters} : any) => {

    if(alter_ego === characters) return (<></>);

  return (
    <>
      <h5 className='mt-3 fw-bold'>Characters</h5>
      <p>{characters}</p>
    </>
  )
}
