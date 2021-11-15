import BestBooksGrid from "../components/bestBooksGrid/BestBooksGrid";
import FeaturedBoxList from "../components/featuredBoxList/FeaturedBoxList";
import FeaturedDataList from "../components/featuredDataList/FeaturedDataList";
import FeaturedTestimonial from "../components/featuredTestimonial/FeaturedTestimonial";
import Hero from "../components/hero/Hero";
function Home() {

  const heroData = {
    title: "Endless entertainment and knowledge",
    subtitle: "Read or listen anytime, anywhere.",
    ctaText: "Read free for 90 days",
    ctaSubText: "Only ₹299/month after. Cancel anytime."
  }
  return (
    <div className="page__home">
      <Hero {...heroData} />
      <FeaturedBoxList />
      <FeaturedTestimonial />
      <BestBooksGrid />
      <FeaturedDataList />
    </div>
  )
}

export default Home;