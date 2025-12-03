import { PricingInteraction } from "@/components/ui/pricing-interaction";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Select the perfect plan for your AI chatbot needs with AJ STUDIOZ. 
            From startups to enterprise, we have the right solution for you.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <PricingInteraction 
              starterMonth={29}
              starterAnnual={24}
              proMonth={99}
              proAnnual={79}
            />
          </div>
        </div>
      </div>
    </div>
  );
}