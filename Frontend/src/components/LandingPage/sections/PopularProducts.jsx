import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Global  <span className="text-coral-red"> Humanitarian </span> Challenges</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Each of these crises has unique challenges and impacts that require a coordinated response from governments, NGOs, and communities to address their immediate effects and prevent future crises.</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {
          products.map(product => (
            <PopularProductCard key={product.name} {...product} />
          ))
        }
      </div>
    </section>
  )
}

export default PopularProducts;