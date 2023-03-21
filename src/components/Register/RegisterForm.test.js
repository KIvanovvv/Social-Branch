import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import RegisterForm from "./RegisterForm.js";

describe(`for Register page`, () => {
  test(`is Register page visible`, () => {
    render(
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>
    );

    const paragraphElement = screen.getByText(/new account/i);
    expect(paragraphElement).toBeInTheDocument();
  });
  test(`displays error if email input is not a valid email`, () => {
    render(
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>
    );
    const emailInputElement = screen.getByPlaceholderText("Email");
    userEvent.type(emailInputElement, "notanemail.com");
    userEvent.tab();
    const errorElement = screen.getByText("Please enter a valid email !");
    expect(errorElement).toBeInTheDocument();
  });
  test(`displays error if username input is less than 3 characters`, () => {
    render(
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>
    );
    const usernameInputElement = screen.getByPlaceholderText("Username");
    userEvent.type(usernameInputElement, "ab");
    userEvent.tab();
    const errorElement = screen.getByText(
      "Username must be at least 3 characters !"
    );
    expect(errorElement).toBeInTheDocument();
  });
  test(`displays error if password input is less than 8 symbols`, () => {
    render(
      <BrowserRouter>
        <RegisterForm />
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
  test(`displays error if repass and password dosen't match`, () => {
    render(
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>
    );
    const emailInputElement = screen.getByPlaceholderText("Email");
    userEvent.type(emailInputElement, "normal@email.com");
    const usernameInputElement = screen.getByPlaceholderText("Username");
    userEvent.type(usernameInputElement, "StandardUsername");
    const passwordInputElement = screen.getByPlaceholderText("Password");
    userEvent.type(passwordInputElement, "standartpassword");
    const repassInputElement = screen.getByPlaceholderText("Repeat password");
    userEvent.type(repassInputElement, "notthesamepassword");
    userEvent.click(screen.getByRole("button"));

    const errorElement = screen.getByText("Passwords dont match");
    expect(errorElement).toBeInTheDocument();
  });
});
