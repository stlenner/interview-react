import { QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Routes from "./routes/routes";
import queryClient from "./queryClient";

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(Routes));
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
