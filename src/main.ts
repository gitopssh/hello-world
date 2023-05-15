export interface Options {
  name?: string
}

export const main = (options: Options): void => {
  console.log('main:', options.name)
}

export default main
