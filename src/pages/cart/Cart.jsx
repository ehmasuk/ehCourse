import { useDispatch, useSelector } from "react-redux";
import Base from "../Base";
import "./cart.css";
import emptycartSvg from "../../assets/img/empty_cart.svg"
import { removeFromCart } from "../../features/cart/cartSlice";



function Cart() {


    const dispatch = useDispatch()

    const cartItems = useSelector(allreducers=>allreducers.cartSlice.cartItems)


    const totalPrice = useSelector(allreducers=>allreducers.cartSlice.totalPrice)





    const handleRemoveFromCart = (id)=>{
        dispatch(removeFromCart({id}))
    }

    return (
        <>
            <Base>
                <div className="new-cart-page-wraper" style={{minHeight:'80vh'}}>


                {
                    cartItems.length == 0 &&
                    (
                        <div className="empty-cart">
                            <img src={emptycartSvg} alt="" />
                            <p className="display-4 mt-3">Your cart is empty</p>
                        </div>
                    )
                }



                {
                    cartItems.length > 0 && 
                    (
                        <div className="container" style={{maxWidth:'1400px'}}>
                        <div className="row">
                            <div className="col-md-8 pt-lg-5">
                                <div className="your-cart-title">
                                    <p>CART</p>
                                </div>
                                <p className="cart-count-title">{cartItems.length} items in cart</p>
                                {
                                    cartItems.map(
                                        (e,i)=>{
                                            return (
                                            <div className="single-cart-item" key={i}>
                                                <div className="item-img">
                                                    <img src={e.img} alt="" />
                                                </div>
                                                <div className="item-body">
                                                    <div className="price">
                                                        <p className="item-title">{e.title}</p>
                                                        <div className="d-flex justify-content-between align-items-end">
                                                            <p>{e.price}</p>
                                                            <i className="far d-block d-lg-none d-md-none fa-trash-alt"></i>
                                                        </div>
                                                    </div>
                                                    <div className="d-none d-lg-block d-md-block">
                                                        <p className="author">
                                                            Created by{" "}
                                                            <a className="new-course-common-links" href="#">
                                                                Eh masuk
                                                            </a>
                                                        </p>
                                                        <div className="ratings">
                                                            5<i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </div>
            
                                                        <div className="delete-options">
                                                            <i onClick={()=>handleRemoveFromCart(e.id)} className="far fa-trash-alt"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        }
                                    )

                                }







                            </div>
                            <div className="col-md-4">
                                <div className="checkout-right-card">
                                    <p className="p-summery">SUMMARY</p>
                                    <div className="total-list">
                                        {
                                            cartItems && cartItems.map(
                                                (e,i)=>{
                                                    return (
                                                    <div className="single-list" key={i}>
                                                        <p className="name">{e.title}</p>
                                                        <p className="price">{e.price}</p>
                                                    </div>
                                                    )
                                                }
                                            )
                                        }

                                    </div>
                                    <div className="sub-total-price">
                                        <div className="name">total</div>
                                        <div className="price">${totalPrice}</div>
                                    </div>
                                    <button className="pagar-button">Checkout now</button>
                                    <div className="coupon-box">
                                        <p>Have a coupon?</p>
                                        <div className="apply-box">
                                            <input type="text" placeholder="Enter your coupon" />
                                            <button>Apply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    )
                }


                </div>
            </Base>
        </>
    );
}

export default Cart;
