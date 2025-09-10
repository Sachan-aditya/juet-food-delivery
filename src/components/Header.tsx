import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            JUET FOOD
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#restaurants" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Restaurants
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-xs text-primary-foreground rounded-full flex items-center justify-center">
              0
            </span>
          </Button>
          
          <Button variant="default" size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            <User className="h-4 w-4 mr-2" />
            Login
          </Button>
          
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;