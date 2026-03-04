"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import hero1 from "../../public/hero-images/hero1.png"
import hero2 from "../../public/hero-images/hero2.png"
import hero3 from "../../public/hero-images/hero3.png"
import { useState } from "react";



const ImgTabs = () => {
      const [ activeTab, setActiveTab ] = useState("organize") //organize, hired, boards

  return (
    <>
      {/* Hero Imgs Section  */}
        <section className="border-t bg-white py-16">
          <div className=" container mx-auto px-4 ">
            <div className="mx-auto max-w-6xl">
              {/* tabs */}
              <div className="flex gap-2 justify-center mb-8">
                <Button 
                onClick={() => setActiveTab("organize")} 
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors hover:cursor-pointer 
                  ${activeTab === "organize" 
                    ? "bg-primary" 
                    : "bg-gray-100 text-gray-700 shadow-lg hover:bg-gray200"}`}>
                  Organize Applications
                </Button>
                <Button 
                onClick={() => setActiveTab("hired")}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors hover:cursor-pointer 
                  ${activeTab === "hired" 
                    ? "bg-primary" 
                    : "bg-gray-100 text-gray-700 shadow-lg hover:bg-gray200"}`}>
                  Get Hired
                </Button>
                <Button 
                onClick={() => setActiveTab("boards")}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors hover:cursor-pointer 
                  ${activeTab === "boards" 
                    ? "bg-primary" 
                    : "bg-gray-100 text-gray-700 shadow-lg hover:bg-gray200"}`}>
                  Manage Boards
                </Button>
              </div>
              <div className="reltive mx-uto msx-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                {activeTab === "organize" && ( 
                  <Image 
                    src={hero1} 
                    alt="hero1"
                    width={1200}
                    height={800} 
                  />
                )}
                {activeTab === "hired" && (
                  <Image 
                    src={hero2} 
                    alt="hero2"
                    width={1200}
                    height={800} 
                  />
                )}
                {activeTab === "boards" && (
                  <Image 
                    src={hero3} 
                    alt="hero3"
                    width={1200}
                    height={800} 
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        </>
  )
}

export default ImgTabs