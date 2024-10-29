import Link from "next/link"
export default function Navbar(){
    return(
        
  <div>
    <nav className="bg-purple-900 text-white h-12 py-2 px-3 flex justify-end space-x-8">   
     <Link href="/"className="hover:text-purple-300">Home</Link>
    <Link href="/about" className="hover:text-purple-300">About</Link>     
    <Link href="/contact"className="hover:text-purple-300">Contact</Link>    
     <Link href="/jobs"className="hover:text-purple-300">Job</Link>    
     <Link href="/apply"className="hover:text-purple-300">Apply</Link>
     </nav>
 </div>
    )
}