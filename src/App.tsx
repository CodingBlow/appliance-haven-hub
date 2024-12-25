import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RentPage from "./pages/RentPage";
import Products from "./pages/Products";
import SellAppliance from "./pages/SellAppliance";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButton from "./components/FloatingButton";

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
          <Route path="/sell" element={<SellAppliance />} />
        </Routes>
        <FloatingButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;