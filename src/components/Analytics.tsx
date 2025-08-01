import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Analytics = () => {
  return (
    <section id="analytics" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Analytics Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your hydration data into actionable insights with our comprehensive analytics suite.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="shadow-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-foreground">Daily Hydration Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Today's Progress</span>
                    <span className="font-semibold text-foreground">2.4L / 3.0L</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div className="bg-gradient-primary h-3 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <div className="text-sm text-muted-foreground">80% of daily goal achieved</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-foreground">Weekly Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                    <div key={day} className="flex items-center space-x-3">
                      <span className="w-8 text-sm text-muted-foreground">{day}</span>
                      <div className="flex-1 bg-secondary rounded-full h-2">
                        <div 
                          className="bg-accent h-2 rounded-full" 
                          style={{width: `${Math.random() * 40 + 60}%`}}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {(Math.random() * 1 + 2.5).toFixed(1)}L
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center shadow-card border-border">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-foreground mb-1">87%</div>
                  <div className="text-sm text-muted-foreground">Goal Achievement</div>
                </CardContent>
              </Card>
              <Card className="text-center shadow-card border-border">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-foreground mb-1">2.8L</div>
                  <div className="text-sm text-muted-foreground">Daily Average</div>
                </CardContent>
              </Card>
              <Card className="text-center shadow-card border-border">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-foreground mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </CardContent>
              </Card>
              <Card className="text-center shadow-card border-border">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-foreground mb-1">+12%</div>
                  <div className="text-sm text-muted-foreground">vs Last Month</div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-foreground">Health Correlations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sleep Quality</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-secondary rounded-full h-2">
                        <div className="bg-teal-400 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-foreground">+85%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Energy Levels</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-secondary rounded-full h-2">
                        <div className="bg-teal-400 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-foreground">+78%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Productivity</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-secondary rounded-full h-2">
                        <div className="bg-teal-400 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <span className="text-sm font-medium text-foreground">+92%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;