import Button from "@/components/Button"
import Card from "@/components/Card"


const Landing: React.FC = () => {
  return (
    <div className="p-7">
        <h1 className="text-xl font-extralight align-middle">Landing Page</h1>
          <div className="flex gap-4 flex-wrap">
        <Card /> 
        <Card /> 
        <Card />
        <Card />
        </div>
        <div className="flex gap-4 flex-wrap">
        <Button title="Small Button" size="small" rounded="sm" />
        <Button title="Medium Button" size="medium" rounded="md" />
        <Button title="Large Button" size="large" rounded="full" />
        <Button title="Custom Combo" size="large" rounded="sm" />
      </div>
    </div>
  )
}

export default Landing