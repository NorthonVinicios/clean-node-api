import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('missing param: name')
      }
    } else if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('missing param: email')
      }
    }
  }
}
