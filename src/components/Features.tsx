import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, CreditCard, Clock, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Easy Ordering",
      description: "Simple and intuitive interface designed for college students"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Multiple payment options with secure transaction processing"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick delivery to your hostel or anywhere on campus"
    },
    {
      icon: Users,
      title: "Student Friendly",
      description: "Built specifically for the JUET college community"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Choose
            <span className="text-primary ml-2">JUET FOOD?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're more than just a food delivery app - we're part of your college experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;