import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import ServicesHub from "./pages/ServicesHub";
import ServicePage from "./pages/ServicePage";
import LocationsHub from "./pages/LocationsHub";
import LocationPage from "./pages/LocationPage";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import BlogHub from "./pages/BlogHub";
import BlogPostPage from "./pages/BlogPostPage";
import ThankYou from "./pages/ThankYou";
import FreeInspection from "./pages/FreeInspection";
import ThankYouInspection from "./pages/ThankYouInspection";
import GetYourFreeInspection from "./pages/GetYourFreeInspection";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/locations" element={<LocationsHub />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/blog" element={<BlogHub />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/free-inspection" element={<FreeInspection />} />
          <Route path="/thank-you-inspection" element={<ThankYouInspection />} />
          <Route path="/get-your-free-inspection" element={<GetYourFreeInspection />} />
          <Route path="/our-services" element={<Navigate to="/services" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
