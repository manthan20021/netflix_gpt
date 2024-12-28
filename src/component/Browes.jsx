import UseMoveData from '../hooks/UseMoveData'
import Header from './Header'
//import { MOVE_DATA } from '../utils/Constent'
//import { MOVE_API_KEY } from '../utils/Constent'

const Browes = () => {
  UseMoveData()
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browes
