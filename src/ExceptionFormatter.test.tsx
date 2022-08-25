import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { ExceptionFormatter } from "./ExceptionFormatter";

describe("exception formatter", () => {

  it("should render hint given no exception text", () => {
    render(<ExceptionFormatter/>)
    const hint = screen.getByTestId("hint")
    expect(hint).toBeVisible()
  })

  it("should remove hint given some exception text", () => {
    render(<ExceptionFormatter/>)
    const textarea = screen.getByRole("textbox")
    const hint = screen.getByTestId("hint")
    userEvent.type(textarea, "some content")

    expect(hint).toHaveClass("formatter-hint--inactive")
  })

})