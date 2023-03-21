import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./LoginForm.js";

describe(`for Login page`, () => {
  test(`is Login page visible`, () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    const paragraphElement = screen.getByText(/email and password/i);
    expect(paragraphElement).toBeInTheDocument();
  });
  test(`displays error if first input is not a valid email`, () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    const emailInputElement = screen.getByPlaceholderText("Email");
    userEvent.type(emailInputElement, "notanemail.com");
    userEvent.tab();
    const errorElement = screen.getByText("Please enter a valid email !");
    expect(errorElement).toBeInTheDocument();
  });
  test(`displays error if second input is less than 8 symbols`, () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    const passwordInputElement = screen.getByPlaceholderText("Password");
    userEvent.type(passwordInputElement, "short");
    userEvent.tab();
    const errorElement = screen.getByText(
      "Password must be at least 8 symbols !"
    );
    expect(errorElement).toBeInTheDocument();
  });
  test(`display's "Incorrect email or password" when loging with incorrect credentials`, async () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    const emailInputElement = screen.getByPlaceholderText("Email");
    userEvent.type(emailInputElement, "notanuser@test.com");
    const passwordInputElement = screen.getByPlaceholderText("Password");
    userEvent.type(passwordInputElement, "notarealpassword");
    const loginButton = screen.getByText("Sign in");
    userEvent.click(loginButton);

    const errorElement = await screen.findByText(
      "Incorrect email or password",
      {},
      { timeout: 5000 }
    );
    expect(errorElement).toBeInTheDocument();
  });
});
