import { Link } from "react-router-dom";
import "../assets/css/header.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



function Header() {

    const carItemsgg = useSelector(
        allreducers =>{
            return allreducers.cartSlice.cartItems
        }
    )

    const totalPrice = useSelector(allreducers=>allreducers.cartSlice.totalPrice)


    const URL = "https://ehmasuk.github.io/course/coursesData.js";
    const [allCourses,setAllCourses] = useState(null);

    const [searchValue,setSearchValue] = useState('');

    const [filteredData,setFilteredData] = useState(null);

    const [showSearchDropdown,setShowSearchDropdown] = useState(false);

    const hideSearchBox = ()=>{
        setShowSearchDropdown(false)
    }

    useEffect(()=>{
        fetch(URL)
        .then(res=>res.json())
        .then(
            data=>{
                setAllCourses(data)
            }
        )
    },[])



    const handleSearchChange = (e)=>{
        const searchingFor = e.target.value;
        setSearchValue(searchingFor)

        if(searchingFor){
            filterAllcourse(searchingFor)
            setShowSearchDropdown(true)
        }else{
            setFilteredData(null);
        }

    }

    const filterAllcourse = (searchValue)=>{
        setFilteredData(
            allCourses.filter(
                e=>{
                    return e.title.toLowerCase().startsWith(searchValue)
                }
            )
        )
    }

    document.addEventListener('click',()=>setShowSearchDropdown(false))









    const [iscartEmpty,setIscartEmpty] = useState(false);


    useEffect(()=>{
        carItemsgg.length == 0 ? setIscartEmpty(true) : setIscartEmpty(false)
    },[carItemsgg])


    const SingleCartItem = ({data})=>{
        return (
            <div className="single-cart-drop-item">
                <img src={data.img} alt="" />
                <div className="des">
                    <p className="title">{data.title}</p>
                    <p>${data.price}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="new-courses-slick-header">
            <Link to="/">
                <h1 style={{color:'tomato'}}>EHMASUK</h1>
            </Link>
            <div className="new-courses-header-categories-wraper">
                <div className="new-courses-header-categories">
                    <p>Categories</p>
                </div>
                <div className="header-search">
                    <div className="search-input-wraper">
                        
                        <i className="fas fa-search"></i>
                        <input onChange={handleSearchChange} value={searchValue} type="text" placeholder="Search for a course" className="search-input" />
                        {
                            showSearchDropdown && filteredData && (
                                <div onClick={e=>e.stopPropagation()} className="header-search-dropdown">
                                    {
                                        filteredData.map((e,i)=>{
                                            return(
                                                <Link onClick={hideSearchBox} key={i} to={`/course/${e.id}`}>
                                                    <img src={e.img_src} alt={e.img_src} />
                                                    <div>
                                                        <p className="title">{e.title}</p>
                                                        <small>Created by <b>{e.author}</b></small>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                        {
                            searchValue && filteredData == '' && showSearchDropdown &&  (
                                <div onClick={e=>e.stopPropagation()} className="header-search-dropdown p-3"><b>NO DATA FOUND</b></div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="new-courses-links">




                {/* cart */}
                <Link to="/cart" className="new-cart-btn">
                    <i className="fas fa-shopping-cart"> {carItemsgg.length>0 && <span>{carItemsgg.length}</span>} </i>
                    <div className="cart-dropdown">
                        <div className="cart-dropdown-inner">
                            {
                                !iscartEmpty && (
                                    <div className="cart-exist">
                                        {
                                            carItemsgg.map((e,i)=><SingleCartItem key={i} data={e} />)
                                        }
                                        <div className="cart-dropdown-total">
                                            <p>Total: ${totalPrice}</p>
                                            <button className="btn go-to-btn">Go to cart</button>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                iscartEmpty &&(
                                    <div className="cart-empty">
                                        <p>Your cart is empty</p>
                                        <p className="text-primary m-0">Go to cart</p>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </Link>











                <Link to="/" className="login-btn">Log in</Link>
                <Link to="/" className="signup-btn">Sign up</Link>


            </div>
        </div>
    );
}

export default Header;
