import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/rootLayout/RootLayout";
import SearchBar from "./components/searchBar/SearchBar";
import DataContext from "./components/dataContext/DataContext";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SearchBar />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <DataContext>
        <RouterProvider router={router} />
      </DataContext>
    </div>
  );
}

export default App;
