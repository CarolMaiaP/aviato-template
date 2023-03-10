import { BannerCategory } from "../components/Category/BannerCategory";
import { ProductsCategory } from "../components/Category/ProductsCategory";
import '../styles/category.scss'

export function Category(){
  return(
    <>
      <BannerCategory />
      <ProductsCategory />
    </>
  )
}