import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { AdminNavbar } from "./AdminNavbar"
import { CharacterDecorations } from "./CharacterDecorations"
import { TopProjects } from "./TopProjects"
import Footer from "./Footer"

export default function Layout() {

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Spooky haunted playground background */}
      {/* <div className = "fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
        <div className = "absolute inset-0 bg-gradient-to-tr from-orange-600/30 via-transparent to-purple-700/40"></div>
        <div className = "absolute inset-0 bg-gradient-to-bl from-green-700/25 via-transparent to-red-800/30"></div>
        <div className = "absolute inset-0 bg-gradient-to-tl from-indigo-800/20 via-transparent to-purple-600/25"></div>
      </div> */}

      {/* <div className="fixed inset-0 bg-gradient-to-br from-[#4BA7D1] to-[#0A2E51]">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#6FB8E0]/25 via-transparent to-[#173D5C]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#3D88AC]/20 via-transparent to-[#0D2E4A]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#2E648B]/15 via-transparent to-[#072E51]/20"></div>
      </div> */}

      {/* <div className="fixed inset-0 bg-gradient-to-br from-[#1E4F77] via-[#173B5C] to-[#0D2742]">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2E6A96]/25 via-transparent to-[#143B60]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#204E73]/20 via-transparent to-[#0D2F52]/25"></div>
      </div> */}

      {/* <div className="fixed inset-0 bg-gradient-to-br from-[#4FA7D3] via-[#315A8C] to-[#1A2C4F]">
         <div className="absolute inset-0 bg-gradient-to-tr from-[#7DD3FC]/25 via-transparent to-[#A78BFA]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#38BDF8]/20 via-transparent to-[#F472B6]/25"></div>
      </div> */}

      {/* <div className="fixed inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#0F172A]">
        
        <div className="absolute inset-0 bg-gradient-to-tr from-[#38BDF8]/30 via-transparent to-[#6366F1]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#0EA5E9]/25 via-transparent to-[#F472B6]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#3B82F6]/20 via-transparent to-[#A78BFA]/25"></div>
      </div> */}

      {/* Light Blue Playground background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#5B9DD0] via-[#3A6E9E] to-[#1E3A52]">
        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#5B9DD0]/40 via-transparent to-[#3A6E9E]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400/20 via-transparent to-[#1E3A52]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#3A6E9E]/30 via-transparent to-sky-400/20"></div>
      </div>


      {/* Spooky */}

      <CharacterDecorations />

      <Header />
      <AdminNavbar />
      <TopProjects />

      <main className="container mx-auto px-4 py-8 relative z-10">
        <Outlet />
      </main>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>


  )
}