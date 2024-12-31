import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RentPage from "./pages/RentPage";
import Products from "./pages/Products";
import SellAppliance from "./pages/SellAppliance";
import Maintenance from "./pages/Maintenance";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButton from "./components/FloatingButton";
import Terms from "./pages/Terms&con.tsx";
import PrivacyPolicy from "./pages/PrivacyPol.tsx";
import Contact from "./pages/ContactUs.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rent/:productId" element={<RentPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/sell" element={<SellAppliance />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <FloatingButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;