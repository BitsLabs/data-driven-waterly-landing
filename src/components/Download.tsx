import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Apple, Shield, Zap, Users } from "lucide-react";

const Download = () => {
  return (
    <section id="download" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start Your Data-Driven Hydration Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals who trust Waterly to optimize their hydration and health.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-card border-border">
              <CardContent className="p-8 text-center">
                <Apple className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-foreground mb-2">iOS App</h3>
                <p className="text-muted-foreground mb-6">
                  Native iOS experience with Apple Health integration, widgets, and Shortcuts support.
                </p>
                <Button variant="hero" size="lg" className="w-full">
                  Download on App Store
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Privacy First</h3>
                <p className="text-muted-foreground mb-6">
                  Your health data stays on your device. We believe in privacy by design.
                </p>
                <Button variant="outline" size="lg" className="w-full">
                  Learn About Privacy
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <Zap className="w-8 h-8 mx-auto mb-3 text-accent" />
              <h4 className="font-semibold text-foreground mb-2">Instant Sync</h4>
              <p className="text-sm text-muted-foreground">
                Real-time data synchronization across all your devices
              </p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-accent" />
              <h4 className="font-semibold text-foreground mb-2">Community</h4>
              <p className="text-sm text-muted-foreground">
                Join a community of health-conscious individuals
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-3 text-accent" />
              <h4 className="font-semibold text-foreground mb-2">Secure</h4>
              <p className="text-sm text-muted-foreground">
                End-to-end encryption and privacy-first approach
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-4 p-6 bg-gradient-subtle rounded-lg border border-border">
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">Free Download</div>
                <div className="text-sm text-muted-foreground">Premium features available</div>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">iOS 15+</div>
                <div className="text-sm text-muted-foreground">Requires iOS 15 or later</div>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">4.8★</div>
                <div className="text-sm text-muted-foreground">Based on 2,500+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;