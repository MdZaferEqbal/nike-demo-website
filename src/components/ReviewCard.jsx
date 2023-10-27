import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]"/>
      <p className="text-center max-w-sm info-text mt-6">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="star" width={24} height={24} className="object-contain m-0"/>
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="text-3xl font-bold mt-1 font-palanquin text-center">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
