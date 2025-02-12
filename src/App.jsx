import Accordion from "./components/Accordions/Accordion"
import { accordionData } from "./components/Accordions/utils/Content"
import Testimonials from "./components/Testimonials/Testimonials"

const App = () => {
  return (
    <div className="accordion">
      {accordionData.map(({ title, content }, index) =>
        <Accordion title={title} content={content} key={index} />
      )}
    </div>
  )
}

export default App