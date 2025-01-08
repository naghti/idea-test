import Search from "@/components/Search"
import WhiteText from "@/UI/WhiteText"

function Header() {
  return (
    <div className="w-full flex justify-between items-center mb-12">
      <WhiteText text="Your tasks" styles={{fontSize: 34}}/>
      <Search/>
    </div>
  )
}

export default Header