import { Toaster } from "./components/ui/toast";
import { QueryClientProvider } from "./provider/tanstack-query-client-provider";
import { ThemeProvider } from "./provider/theme-provider";

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
