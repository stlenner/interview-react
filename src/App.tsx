import { QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Routes from "./routes/routes";
import queryClient from "./queryClient";

export default function App() {
  const router = createHashRouter(createRoutesFromElements(Routes));
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
