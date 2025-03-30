import { Link } from "lucide-react"
import { Button } from "./ui/button"
function Nav() {
  return (
    <>
    <nav className='fixed top-0 left-0 w-full bg-opacity-90 bg-[#1A1A1A] p-5 shadow-lg flex items-center justify-between z-50'>
        <h1 className='text-2xl font-bold uppercase text-white'>Trainee</h1>
        <ul className='flex items-center gap-5 text-white'>
          <li className='uppercase'><a href="/">Home</a></li>
          <li className='uppercase'><a href="">About Us</a></li>
          <li className='uppercase'><a href="">Contact</a></li>
          <li className='uppercase'>
            
            <Button className='uppercase text-white bg-[#6d54cf] hover:bg-[#5842a3]'>
              <a href="/login">
              Login
              </a>
            </Button>
            
          </li>
        </ul>
      </nav>

    </>
  )
}

export default Nav