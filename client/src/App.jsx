import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Routines from "./pages/Routines";

// Create a client
const queryClient = new QueryClient();

const App = () => (
    <Provider store={store}>
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <Toaster />
                    <Sonner />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route index element={<Dashboard />} />
                                <Route
                                    path="/routines"
                                    element={<Routines />}
                                />
                            </Route>
                            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </TooltipProvider>
            </QueryClientProvider>
        </ThemeProvider>
    </Provider>
);

export default App;
