import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext.js";
//Custon component
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/BackendURL.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
//Custom Pages or Views
import { Home } from "./pages/Home.jsx";
import { Demo } from "./pages/demo";
import { Contacts } from "./pages/Contacts.jsx"
import { AddContact } from "./pages/AddContact.jsx";
import { EditContact } from "./pages/EditContact.jsx";
import { StarwarsItems } from "./pages/StarwarsItems.jsx";



//create your first component
const Layout = () => {
    //The basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Contacts />} path="/contacts" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<AddContact />} path="/add" />
                        <Route element={<EditContact />} path="/edit" />
                        <Route element={<StarwarsItems />} path="/people" />
                        <Route element={<StarwarsItems />} path="/starships" />
                        <Route element={<StarwarsItems />} path="/planets" />
                        <Route element={<h1>Not found!</h1>} path="*todos" />
                        
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);