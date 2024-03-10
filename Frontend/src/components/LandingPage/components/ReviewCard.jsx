import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col shadow-3xl bg-white p-10 rounded-[20px] gap-2">
            <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px] border-4 p-1 border-coral-red" />
            <p className="mt-6 max-w-sm text-center">{feedback}</p>
            
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold text-coral-red">{customerName}</h3>
        </div>
    )
}

export default ReviewCard;