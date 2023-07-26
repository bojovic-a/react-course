import { BrowserRouter, Route, Router } from "react-router-dom";

<BrowserRouter>
    <Routes>
        <Route element={<Home />} path="/home" exact />
        <Route element={<About />} path="/about-us" exact />
        <Route element={<Login />} path="/login" exact />
    </Routes>
</BrowserRouter>
