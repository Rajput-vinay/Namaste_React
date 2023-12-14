import { render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mock/mockResListData.json"
import { Await, BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("Should render Body component  ", async() => {
    await act (async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));


    const searchBtn = screen.getByRole("button", { name: "search" });
    expect(searchBtn).toBeInTheDocument();
})

