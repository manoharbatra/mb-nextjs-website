import PricingCard from "./PricingCard";
import { pricingPlans } from "./cohortData";

const text = 'Level Up Your Tech Career With Personalized 1:1 Mentorship'
export default function CohortPricingSection() {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            {text}
          </h2>

          {/* <p className="mt-4 w-full max-w-full text-lg leading-8 text-slate-500">
            140+ professionals has already got their dream job. My course is live and delivering results. Get a head start with our self-paced prep kit or accelerate your
            journey with 1-on-1 mentorship(*).
          </p> */}
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}