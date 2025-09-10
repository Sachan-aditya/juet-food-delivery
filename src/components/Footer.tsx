import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-warm bg-clip-text text-transparent">
              JUET FOOD
            </h3>
            <p className="text-background/80 text-sm">
              Bringing delicious food from your favorite college restaurants 
              right to your doorstep.
            </p>
            <div className="flex items-center gap-2 text-background/80">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">JUET College Campus</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#restaurants" className="hover:text-background transition-colors">Restaurants</a></li>
              <li><a href="#menu" className="hover:text-background transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Contact Info</h4>
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@juetfood.com</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Stay Updated</h4>
            <p className="text-sm text-background/80">
              Get notified about new restaurants and special offers
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2024 JUET FOOD. Made with ❤️ for JUET College students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;