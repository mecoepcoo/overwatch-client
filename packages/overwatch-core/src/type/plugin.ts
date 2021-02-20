export type Plugin = {
  name: string
  install: (...args: any[]) => void
}
