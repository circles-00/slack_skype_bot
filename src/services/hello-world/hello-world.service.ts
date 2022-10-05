import { IHelloWorldService } from './types'

export class HelloWorldService implements IHelloWorldService {
  helloWorld(): string {
    return 'Hello World'
  }
}
