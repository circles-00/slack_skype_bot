import { BaseError } from './BaseError'
export class BadRequest extends BaseError {
  constructor(message: string) {
    super(message)
    this.name = 'BadRequest'
    this.httpCode = 400
    this.message = message
  }
}
