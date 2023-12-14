import { act } from "react-dom/test-utils"
import {render,screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"


global.fetch = jest.fn(() =>
     Promise.resolve({
        json:() => Promise.resolve(MOCK_DATA)
    })
)
it("should load Restaurant Menu Component", async()=>{
    await act(async ()=>{
        render(<RestaurantMenu/>)
    });


    const accordionHeader = screen.getByText("Biriyani (5)");
}) 