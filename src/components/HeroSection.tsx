import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Users, Clock, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-bg section-padding min-h-screen flex items-center">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <Badge
              variant="secondary"
              className="bg-warning-light text-warning border-warning/20 text-sm px-4 py-2 font-medium"
            >
              One Tap Attendance. One Click Payroll.
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="heading-1 text-gray-900">
                One App for
                <span className="block text-primary">Complete Business</span>
                <span className="block">Management</span>
              </h1>

              <p className="text-body max-w-lg">
                Streamline your business operations with our integrated
                attendance tracking and payroll management system. Everything
                you need in one powerful platform.
              </p>
            </div>

            {/* Feature Highlight Card */}
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Works Offline Too!
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Track attendance even without internet connection. Data
                    syncs automatically when connection is restored.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border">
                      Offline First
                    </span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border">
                      Auto Sync
                    </span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border">
                      GPS Tracking
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-base px-8 py-3 h-auto">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="btn-outline text-base px-8 py-3 h-auto"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-3">
              {[
                "WhatsApp Reports & Notifications",
                "Offline Attendance Tracking",
                "Integrated Task Manager",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl scale-110"></div>

              {/* Main Card */}
              <Card className="relative bg-white p-8 rounded-3xl shadow-heavy">
                <div className="space-y-6">
                  {/* Team Photo */}
                  <div className="aspect-[4/3] rounded-2xl relative overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg"
                      alt="Professional team collaboration - modern workplace"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>

                    {/* Overlay Content */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm">
                              Team Dashboard
                            </h3>
                            <p className="text-xs text-gray-600">
                              Real-time employee tracking
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        150+
                      </div>
                      <div className="text-xs text-gray-600">Employees</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">
                        24/7
                      </div>
                      <div className="text-xs text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
