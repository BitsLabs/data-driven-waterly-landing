import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, TrendingUp, Calendar, Target, Brain, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive charts and graphs showing your hydration patterns, trends, and correlations with daily activities."
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Weekly, monthly, and yearly trend analysis to help you understand long-term hydration habits and improvements."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered reminders based on your schedule, weather conditions, and personal hydration needs."
    },
    {
      icon: Target,
      title: "Goal Optimization",
      description: "Dynamic goal adjustment based on your activity level, climate, and health metrics for optimal hydration."
    },
    {
      icon: Brain,
      title: "Health Insights",
      description: "Correlate hydration data with sleep, energy levels, and productivity for comprehensive health insights."
    },
    {
      icon: Smartphone,
      title: "Native iOS Experience",
      description: "Seamlessly integrated with Apple Health, Shortcuts, and widgets for the perfect iOS experience."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Data-Driven Hydration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just tracking glasses of water. Waterly provides professional-grade analytics 
            to help you understand and optimize your hydration patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-card transition-all duration-300 hover:border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;