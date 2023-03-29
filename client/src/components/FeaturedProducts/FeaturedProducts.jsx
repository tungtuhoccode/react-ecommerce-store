import "./FeaturedProducts.scss"
import Card from "../Card/Card"
const ProductsList = (props) =>{
    const data = [
        {
            id: 1, 
            img: "/img/featuredProduct/wollBlendCoatModel.jpeg",
            img2: "/img/featuredProduct/wollblendCoat.jpeg",
            title: "short Sleeve Graphic T-shirt" ,
            isNew: true,
            oldPrice: 22.99,
            price: 10,
        },
        {
            
            id: 2, 
            img: "/img/featuredProduct/DenimOvershirt.jpeg",
            img2: "/img/featuredProduct/DenimOvershirt2.jpeg",
            title: "Denim Overshirt" ,
            isNew: true,
            price: 39.99,
        },

        {
            id: 3, 
            img: "//lp2.hm.com/hmgoepprod?set=source[/9f/16/9f16f2f5392e2184bbf66f7a283fca2d95bca3ab.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]",
            img2: "https://lp2.hm.com/hmgoepprod?set=source[/f9/c3/f9c3f12b844b6e09bf4263406be48fcd783ab213.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
            title: "Skirt",
            oldPrice: 22.99,
            price: 11.99,
        },

        {
            id: 4, 
            img: "/img/featuredProduct/DenimOvershirt2.jpeg",
            img2: "https://lp2.hm.com/hmgoepprod?set=source[/1a/71/1a7159ac2cfedc4a7f07d9592a5577ab30bc82d6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
            
            title: "Denim Overshirt" ,
            isNew: true,
            price: 39.99,
        },
        {
            id: 5, 
            img: "//lp2.hm.com/hmgoepprod?set=source[/9f/16/9f16f2f5392e2184bbf66f7a283fca2d95bca3ab.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]",
            img2: "https://lp2.hm.com/hmgoepprod?set=source[/f9/c3/f9c3f12b844b6e09bf4263406be48fcd783ab213.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
            title: "Skirt",
            oldPrice: 22.99,
            price: 11.99,
        },

        {
            
            id: 6, 
            img: "/img/featuredProduct/DenimOvershirt2.jpeg",
            img2: "https://lp2.hm.com/hmgoepprod?set=source[/1a/71/1a7159ac2cfedc4a7f07d9592a5577ab30bc82d6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
            
            title: "Denim Overshirt" ,
            isNew: true,
            price: 39.99,
        },
        {
            id: 7, 
            img: "//lp2.hm.com/hmgoepprod?set=source[/9f/16/9f16f2f5392e2184bbf66f7a283fca2d95bca3ab.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]",
            img2: "https://lp2.hm.com/hmgoepprod?set=source[/f9/c3/f9c3f12b844b6e09bf4263406be48fcd783ab213.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
            title: "Skirt",
            oldPrice: 22.99,
            price: 11.99,
        },

    ]

    return (
        <div className="featured-products">
            <div className="top">
            <h1>{props.type} <span className="control-display">products</span></h1>
            <p className="featured-product-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Riss commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
            </p>
            </div>
            <div className="bottom">
               {data.map (item =>
                {
                  return(
                        <Card item={item} key={item.id}/>
                  )
                }

               )}
            </div>
        </div>
    )
}

export default ProductsList