import Button from "@/components/Button"
import Card from "@/components/Card"


const Landing: React.FC = () => {
  return (
    <div>
        <h1 className="text-xl font-extralight align-middle">Landing Page</h1>
        <Card/>
        <Button title={"Buy"}/>
    </div>
  )
}

export default Landing