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
export type ImageLook = "empty" | "filled";

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
  sold: number
  image: string
  imageLook: ImageLook
  alibabaUrl: string
  summary: string
}
