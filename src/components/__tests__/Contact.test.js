import Contact from "../Contact"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Contact Us page test case", ()=>{
    it("Should load contact us component", () => {
        render(<Contact />);


        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })


    it("Should load button inside Contact component", () => {
        render(<Contact />);


        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })

    it("Should load input test inside Contact component", () => {
        render(<Contact />);


        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    })



})
