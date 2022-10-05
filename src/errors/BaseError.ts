export class BaseError extends Error {
  isOperational: boolean
  httpCode?: number

  constructor(args: string) {
    super(args)
    this.isOperational = true
    Error.captureStackTrace(this, this.constructor)
  }

  static knownErrors() {
    return [
      'BadRequest',
      'Unauthorized',
      'Unauthenticated',
      'RefreshTokenExpired',
      'Error',
    ]
  }
}
