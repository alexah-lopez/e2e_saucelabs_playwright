class LoginPage {
  constructor(page) {
    this.usernameInput = page.getByTestId("username");
    this.passwordInput = page.getByTestId("password");
    this.submitButton = page.getByTestId("login-button");
    this.errorLabel = page.getByTestId("error");
  }
  async submitLoginForm(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
export default LoginPage;
