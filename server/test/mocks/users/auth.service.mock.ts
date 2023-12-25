export class AuthServiceMock {
  createUser = jest.fn();
  verifyTokenConfirmUser = jest.fn();
  resendVerifyTokenConfirmUser = jest.fn();
  resetPasswordDemande = jest.fn();
  resetPasswordConfirm = jest.fn();
  login = jest.fn();
}
