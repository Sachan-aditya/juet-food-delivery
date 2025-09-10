import RestaurantCard from "./RestaurantCard";

const RestaurantSection = () => {
  const restaurants = [
    {
      name: "Spice Junction",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      rating: 4.8,
      deliveryTime: "15-25 min",
      cuisine: "North Indian, Chinese",
      location: "Near Main Gate",
      isOpen: true,
      specialOffer: "20% OFF"
    },
    {
      name: "South Delights",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      rating: 4.6,
      deliveryTime: "20-30 min", 
      cuisine: "South Indian, Dosa, Idli",
      location: "Food Court",
      isOpen: true
    },
    {
      name: "Cafe Corner",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      rating: 4.4,
      deliveryTime: "10-20 min",
      cuisine: "Snacks, Beverages, Fast Food",
      location: "Library Block",
      isOpen: false
    }
  ];

  return (
    <section id="restaurants" className="py-16 bg-food-cream">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Choose Your
            <span className="text-primary ml-2">Restaurant</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover delicious meals from your favorite college restaurants. 
            Fresh ingredients, authentic flavors, delivered fast.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              {...restaurant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;