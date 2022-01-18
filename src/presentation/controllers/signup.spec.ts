import { SignUpController } from './signup'

describe('SignUp Controllers', () => {
  test('Should return 400 if no name is provide', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        mail: 'any_mail@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'

      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
