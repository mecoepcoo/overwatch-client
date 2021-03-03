export type Plugin<T = any> = {
  name: string
  install: (...args: any[]) => T
}
