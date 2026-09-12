export type ProductShape = "round" | "square" | "bell" | "spout";
export type ProductFinish = "matte" | "frosted" | "iridescent";
export type ProductColor =
  | "white"
  | "black"
  | "amber"
  | "champagne-gold"
  | "clear"
  | "pink"
  | "blue"
  | "gray"
  | "brown";

export type Product = {
  slug: string
  title: string
  colors: ProductColor[]
  finish?: ProductFinish
  shape: ProductShape
  sizesOz: number[]
  withLid: boolean
  withBox: boolean
  thickBottom?: boolean
  moq: 240
  priceFrom: number
  image: string
  alibabaUrl: string
  summary: string
}
