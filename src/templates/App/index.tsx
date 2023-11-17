import { GenerateButton } from "@/components/GenerateButton"

export const AppTemplate = () => {

  const handleClick = () => {
    console.log("clicked")
  }

  return <div>
    <GenerateButton value="Generate" onClick={handleClick}/>
  </div>
}