import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Phone, Clock, Shield } from "lucide-react";

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Helmet>
        <title>Maintenance Services |Ac On Rent Gurugram</title>
        <meta
          name="description"
          content="Professional maintenance services for all your appliances. 24/7 support, expert technicians, and comprehensive care."
        />
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">
          Maintenance Services
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Wrench className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">Expert Technicians</h2>
              </div>
              <p className="text-muted-foreground">
                Our certified technicians provide professional maintenance for
                all types of appliances.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">24/7 Support</h2>
              </div>
              <p className="text-muted-foreground">
                Round-the-clock customer support for emergency maintenance
                needs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">Quick Response</h2>
              </div>
              <p className="text-muted-foreground">
                Same-day service for urgent maintenance requests.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">Service Guarantee</h2>
              </div>
              <p className="text-muted-foreground">
                All maintenance work comes with our satisfaction guarantee.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold">Need Maintenance?</h3>
          <p className="text-muted-foreground">
            Contact us for immediate assistance
          </p>
          <div className="flex justify-center gap-4">
            <a href="tel:+1234567890" className="text-primary hover:underline">
              📞 Call Now
            </a>
            <a
              href="https://wa.me/1234567890"
              className="text-green-500 hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Maintenance;