import UseMoveData from '../hooks/UseMoveData'
import Header from './Header'
import Main from './Main'
import Secondary from './Secondary'


const Browes = () => {
  UseMoveData()

 
  return (
    <div>
      <Header/>
      <Main/>
      <Secondary/>
    </div>
  )
}

export default Browes
