import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes } from "../constants";

const Hero = () => {

    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red"></p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">Building Bridges, Changing Lives</span>
                    <br />
                    <span className="text-coral-red inline-block mt-3"></span> 
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                Our platform connects donors with NGOs, empowering individuals and organizations to make a difference in communities worldwide. Join us in creating a better future for all
                </p>
                <Button label="Register" iconURL={arrowRight} />
                
            </div>

            
        </section>
    )
}

export default Hero;