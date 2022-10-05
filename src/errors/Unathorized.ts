import { BaseError } from './BaseError'

class Unauthorized extends BaseError {
  constructor(message: string) {
    super(message)
    this.name = 'RefreshTokenExpired'
    this.httpCode = 401
    this.message = message
  }
}

module.exports = Unauthorized
