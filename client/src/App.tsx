import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Podcast from "./pages/Podcast";
import Retreat from "./pages/Retreat";
import Community from "./pages/Community";
import Breathwork from "./pages/Breathwork";

// Strip trailing slash so wouter base matching works correctly
const BASE = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");

function Router() {
  return (
    <WouterRouter base={BASE}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/podcast"} component={Podcast} />
        <Route path={"/retreat"} component={Retreat} />
        <Route path={"/community"} component={Community} />
        <Route path={"/breathwork"} component={Breathwork} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <ThemeProvider defaultTheme="dark">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
