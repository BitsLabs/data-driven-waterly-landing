import { Button } from "@/components/ui/button";
import heroImage from "@/assets/waterly-hero.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-subtle min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Water Intake,
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Analyzed</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Professional hydration tracking with advanced analytics. Understand your patterns, optimize your health, and achieve your hydration goals with data-driven insights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Download for iOS
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Analytics Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.8★</div>
                <div className="text-sm text-muted-foreground">App Store Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">1M+</div>
                <div className="text-sm text-muted-foreground">Data Points</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Waterly app interface showing data analytics" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-elegant"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;