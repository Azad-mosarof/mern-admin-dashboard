import { CssBaseline, ThemeProvider } from "@mui/material";
import {createTheme} from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./scenes/dashboard/Dashboard";
import Layout from "./scenes/layout/Layout"
import Products from "./scenes/products/Products";
import Customers from "./scenes/customers/Customers";
import Transactions from "./scenes/transactions/Transactions";
import Admin from "./scenes/admin/Admin";
import Breakdown from "./scenes/breakdown/Breakdown";
import Daily from "./scenes/daily/Daily";
import Geography from "./scenes/geography/Geography";
import Monthly from "./scenes/monthly/Monthly";
import Overview from "./scenes/overview/Overview";
import Performance from "./scenes/performance/Performance";

function App() {

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/customers" element={<Customers/>}/>
              <Route path="/transactions" element={<Transactions/>}/>
              <Route path="/admin" element={<Admin/>}/>
              <Route path="/breakdown" element={<Breakdown/>}/>
              <Route path="/daily" element={<Daily/>}/>
              <Route path="/geography" element={<Geography/>}/>
              <Route path="/monthly" element={<Monthly/>}/>
              <Route path="/overview" element={<Overview/>}/>
              <Route path="/performance" element={<Performance/>}/>
            </Route>
          </Routes>
        </ThemeProvider> 
      </BrowserRouter>
    </div>
  );
}

export default App;
