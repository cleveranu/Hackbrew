import { shoe8 } from "../assets/images"
import Button from "../components/Button"
import { Link } from "react-router-dom";
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Connecting <span className="text-coral-red">Donors with </span> <span className="text-coral-red">Impact</span> 
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">NGOConnect is your gateway to meaningful philanthropy. Our platform leverages AI to match donors with NGOs based on their interests, values, and the pressing needs of society. When you're unsure about what to provide, our intelligent system suggests impactful ways to contribute, ensuring your donations make a real difference.</p>
        <p className="mt-6 lg:max-w-lg info-text">Join us in making a positive impact on the world.</p>

        <div className="mt-11">
         < Link to='/register'>
         <Button label="Join as  Donor" />
         </Link>
         
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality;