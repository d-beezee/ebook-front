import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Pages from "@/pages";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import Sidebar from "@/features/Sidebar";
import theme from "./theme";
export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Pages.List />} />
              <Route path="/settings" element={<Pages.Settings />} />
              <Route path="/list/:id" element={<Pages.Single />} />
            </Routes>
          </Sidebar>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};
