import { HeroList } from '../components'

export const MarvelPage = () => {
  return (
    <>
      <h1 className='fw-bold mb-5'>Marvel</h1>

      <HeroList 
        publisher='Marvel Comics'
      />
    </>
  )
}
