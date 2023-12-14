import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utlis/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
it("Should render Header Component with a login Button", () =>{
    render(
        <BrowserRouter>
    <Provider store ={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "login"});
   
   //  const loginButton = screen.getByText("login");
    expect(loginButton).toBeInTheDocument(); 
}) 

it("Should render Header Component with a Cart Item", () =>{
    render(
        <BrowserRouter>
    <Provider store ={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart (0 item)");
   
   
    expect(cartItems).toBeInTheDocument(); 
}) 

it("Should change Login Button to logout on click ", () =>{
    render(
        <BrowserRouter>
    <Provider store ={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "login"});
     fireEvent.click(loginButton);
     const logoutButton = screen.getByRole("button", {name:"logout"})
    expect(logoutButton).toBeInTheDocument(); 
}) 