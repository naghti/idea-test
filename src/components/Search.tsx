import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import Image from "../assets/icons/search.svg"
import { useSelector } from "react-redux"
import { filterSLice } from "@/store/reducers/FilterSlice"

function Search() {
  const dispatch = useAppDispatch()
  const {filter} = useAppSelector(state => state.fitlerReducer)
  const {changeFilter} = filterSLice.actions

  const changeInput = (str: string) => dispatch(changeFilter(str))

  return (
    <div className="
      bg-input-background border border-white-border rounded-full py-2 px-5 flex items-center 
      hover:border-blue-border 
      focus-within:shadow-[0px_0px_0px_3px] 
      focus-within:border-blue-border 
      focus-within:shadow-blue-500/50
    ">
      <div className="mr-5">
        <Image color="white" width={18} height={18}/>
      </div>
      <input 
        value={filter}
        onChange={(e) => changeInput(e.target.value)}
        className="bg-transparent border-none text-gray-300 placeholder-gray-400 text-gray-300 focus:outline-none"
        placeholder="поиск..."
      />
    </div>
  )
}

export default Search