import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <h1 className="heading-1 text-gray-900">Detailed Features</h1>

            <p className="text-body">
              This page is coming soon! We're working on providing you with
              comprehensive information about all MyHisaab features. For now,
              you can explore our features section on the homepage or contact us
              for more details.
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 mt-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                What you can expect to find here:
              </h2>
              <ul className="text-left space-y-2 text-gray-700 max-w-2xl mx-auto">
                <li>• Detailed feature breakdowns and explanations</li>
                <li>• Screenshots and demos of each functionality</li>
                <li>• Integration guides and API documentation</li>
                <li>• Use case examples and best practices</li>
                <li>• Feature comparison charts</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Features;
