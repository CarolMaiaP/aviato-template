import Banner from '../components/Home/Banner'
import { Popular } from '../components/Home/Popular'
import { Tendencies } from '../components/Home/Tendencies'
import '../styles/home.scss'

export function Home(){
  return(
    <>
      <Banner />
      <Tendencies />
      <Popular />
    </>
  )
}