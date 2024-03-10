import { shoe9 } from "../assets/images"
import Button from "../components/Button"
import {Link} from 'react-router-dom';
const SuperQuality1 = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Empowering <span className="text-coral-red"> NGOS</span> <span className="text-coral-red"> With A Greater Impact </span> 
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">NGOConnect offers a revolutionary platform for NGOs to enhance their fundraising and project development efforts. Our AI-powered tools streamline fund-raising processes, assist in writing compelling proposals, and connect you with potential donors who align with your mission.</p>
        <p className="mt-6 lg:max-w-lg info-text">Join us to amplify your impact and reach new heights in your social initiatives.</p>

        <div className="mt-11">

        < Link to='/registerngo'>
        <Button label="Join as NGO " />
         </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe9} alt="shoe9" width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality1;