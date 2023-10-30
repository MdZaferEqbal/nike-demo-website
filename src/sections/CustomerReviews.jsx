import { reviews } from "../constants"
import { ReviewCard } from "../components"

const CustomerReviews = () => {
  return (
    <>
    <section>
      <h3 className="max-container text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red">&nbsp;Customers</span>
        &nbsp;Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
    <div id="contact-us"></div>
    </>
  )
}

export default CustomerReviews
