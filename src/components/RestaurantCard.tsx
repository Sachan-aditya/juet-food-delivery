import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, MapPin } from "lucide-react";

interface RestaurantCardProps {
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisine: string;
  location: string;
  isOpen: boolean;
  specialOffer?: string;
}

const RestaurantCard = ({ 
  name, 
  image, 
  rating, 
  deliveryTime, 
  cuisine, 
  location, 
  isOpen,
  specialOffer 
}: RestaurantCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {specialOffer && (
          <Badge className="absolute top-3 left-3 bg-food-golden text-foreground font-semibold">
            {specialOffer}
          </Badge>
        )}
        {!isOpen && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="secondary" className="bg-white/90 text-foreground">
              Closed
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-food-golden text-food-golden" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm">{cuisine}</p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className={`w-full ${isOpen ? 'bg-gradient-primary hover:opacity-90' : 'bg-muted text-muted-foreground cursor-not-allowed'}`}
          disabled={!isOpen}
        >
          {isOpen ? 'View Menu' : 'Closed'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;