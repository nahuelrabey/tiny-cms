import Editor from "../components/Editor";
import {Inter} from "@next/font/google"

const inter = Inter({subsets:["latin"]})

export default function Home(){
  return (
    <main style={inter.style}>
      <Editor/>
    </main>
  )
}