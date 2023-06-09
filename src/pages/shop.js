import NavBar from "../components/nav";
import Product from "../components/product";

let ShopPage = function ShopPage(){
    return (     
            <>
               <div className="shop-bg">
                    <NavBar/>
                    <Product/>
               </div>
            </>
    )
}

export default ShopPage;