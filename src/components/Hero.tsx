import { Button } from "@/components/ui/button";
import { Clock, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Delicious Food
                <br />
                <span className="text-food-golden">Delivered Fast</span>
              </h1>
              <p className="max-w-[600px] text-white/90 text-lg md:text-xl">
                Order from your favorite college restaurants with just a few clicks. 
                Fresh, tasty, and delivered right to your hostel.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                Order Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8">
                View Menu
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="h-5 w-5" />
                <span className="text-sm">15-30 min delivery</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Star className="h-5 w-5 fill-food-golden text-food-golden" />
                <span className="text-sm">4.8+ rating</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Users className="h-5 w-5" />
                <span className="text-sm">1000+ happy students</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={heroImage}
              alt="Delicious college food spread"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-elevated"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;