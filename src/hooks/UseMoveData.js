import { useEffect } from "react";
import { KEY_OPTIONS, MOVE_DATA } from "../utils/Constent";
import { useDispatch } from "react-redux";
import { getMoves } from "../store/movesSlice";

const UseMoveData = () => {

  const dispatch = useDispatch()

  const moviesData = async () =>{
    try {
      const response = await fetch(MOVE_DATA, KEY_OPTIONS);
      const result = await response.json();
      console.log(result);
      dispatch(getMoves(result))
      
    } catch (error) {
      console.error(error);
    }
    }
    useEffect(() => {
      moviesData()
    } , [])
  
}

export default UseMoveData