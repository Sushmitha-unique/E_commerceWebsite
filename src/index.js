import React from "react";
import ReactDOM from "react-dom"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ShopProvider from "./Context/ShopProvider"


ReactDOM.render(
    <ShopProvider>
     <BrowserRouter>
<App/></BrowserRouter>
</ShopProvider>
,document.getElementById("root"))
