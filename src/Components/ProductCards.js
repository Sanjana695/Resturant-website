import React from 'react';
import ReactDOM from 'react-dom';

const ProductCard = () => {
    const { useState } = React;
    const [addcart, setaddcart] = useState(1);
    const [heart, setheart] = useState(true);


    const AddCart = () => {
        if (addcart < 10) { setaddcart(addcart + 1); }
    }; const DecBag = () => {
        if (addcart >= 1) {
            setaddcart(addcart - 1);
        }
    };



    const Heart = () => {
        if (heart) {
            setheart(false);
        }
        else {
            setheart(true);
        }
    }

    return (
        <>
            <div className="container">


                <div className="card">
                    <i className="fa fa-long-arrow-left"></i>
                    <div className="image">
                        <img src="https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__480.jpg" />

                    </div>
                    <div className="text">

                        <h3>Cake</h3>
                        <div className="rating_reviews">
                            <div className="rating">
                                <input type="radio" name="rating" value="5" id="5" />
                                <label for="5">☆</label>
                                <input type="radio" name="rating" value="4" id="4" />
                                <label for="4">☆</label>
                                <input type="radio" name="rating" value="3" id="3" />
                                <label for="3">☆</label>
                                <input type="radio" name="rating" value="2" id="2" />
                                <label for="2">☆</label>
                                <input type="radio" name="rating" value="1" id="1" />
                                <label for="1">☆</label>
                            </div>
                            <p>4.7</p>
                            <p>32 reviews</p>
                        </div>

                        <div className="price">
                            <h3>$15.90</h3>
                            <div className="qty">
                                <i onClick={DecBag} className="fa fa-minus"></i>
                                <p>{addcart}</p>
                                <i onClick={AddCart} className="fa fa-plus"></i>
                            </div>
                        </div>
                        <div className="description">
                            <h5>Description</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="last_section">
                            <button onClick={AddCart}>Add to cart</button>
                            <div className="heart">
                                <i onClick={Heart} className={`fa ${heart ? "fa-heart-o" : "fa-heart"}`}></i>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="card">
                    <i className="fa fa-long-arrow-left"></i>
                    <div className="image">
                        <img src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__480.jpg" />

                    </div>
                    <div className="text">

                        <h3>Pancake</h3>
                        <div className="rating_reviews">
                            <div className="rating">
                                <input type="radio" name="rating" value="5" id="5" />
                                <label for="5">☆</label>
                                <input type="radio" name="rating" value="4" id="4" />
                                <label for="4">☆</label>
                                <input type="radio" name="rating" value="3" id="3" />
                                <label for="3">☆</label>
                                <input type="radio" name="rating" value="2" id="2" />
                                <label for="2">☆</label>
                                <input type="radio" name="rating" value="1" id="1" />
                                <label for="1">☆</label>
                            </div>
                            <p>4.7</p>
                            <p>32 reviews</p>
                        </div>

                        <div className="price">
                            <h3>$15.90</h3>
                            <div className="qty">
                                <i onClick={DecBag} className="fa fa-minus"></i>
                                <p>{addcart}</p>
                                <i onClick={AddCart} className="fa fa-plus"></i>
                            </div>
                        </div>
                        <div className="description">
                            <h5>Description</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="last_section">
                            <button onClick={AddCart}>Add to cart</button>
                            <div className="heart">
                                <i onClick={Heart} className={`fa ${heart ? "fa-heart-o" : "fa-heart"}`}></i>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="card">
                    <i className="fa fa-long-arrow-left"></i>
                    <div className="image">
                        <img src="https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430__480.jpg" />

                    </div>
                    <div className="text">

                        <h3>Strawberry Cake</h3>
                        <div className="rating_reviews">
                            <div className="rating">
                                <input type="radio" name="rating" value="5" id="5" />
                                <label for="5">☆</label>
                                <input type="radio" name="rating" value="4" id="4" />
                                <label for="4">☆</label>
                                <input type="radio" name="rating" value="3" id="3" />
                                <label for="3">☆</label>
                                <input type="radio" name="rating" value="2" id="2" />
                                <label for="2">☆</label>
                                <input type="radio" name="rating" value="1" id="1" />
                                <label for="1">☆</label>
                            </div>
                            <p>4.7</p>
                            <p>32 reviews</p>
                        </div>

                        <div className="price">
                            <h3>$15.90</h3>
                            <div className="qty">
                                <i onClick={DecBag} className="fa fa-minus"></i>
                                <p>{addcart}</p>
                                <i onClick={AddCart} className="fa fa-plus"></i>
                            </div>
                        </div>
                        <div className="description">
                            <h5>Description</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="last_section">
                            <button onClick={AddCart}>Add to cart</button>
                            <div className="heart">
                                <i onClick={Heart} className={`fa ${heart ? "fa-heart-o" : "fa-heart"}`}></i>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="card">
                    <i className="fa fa-long-arrow-left"></i>
                    <div className="image">
                        <img src="https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434__480.jpg" />

                    </div>
                    <div className="text">

                        <h3>Barbeque</h3>
                        <div className="rating_reviews">
                            <div className="rating">
                                <input type="radio" name="rating" value="5" id="5" />
                                <label for="5">☆</label>
                                <input type="radio" name="rating" value="4" id="4" />
                                <label for="4">☆</label>
                                <input type="radio" name="rating" value="3" id="3" />
                                <label for="3">☆</label>
                                <input type="radio" name="rating" value="2" id="2" />
                                <label for="2">☆</label>
                                <input type="radio" name="ratiyng" value="1" id="1" />
                                <label for="1">☆</label>
                            </div>
                            <p>4.7</p>
                            <p>32 reviews</p>
                        </div>

                        <div className="price">
                            <h3>$15.90</h3>
                            <div className="qty">
                                <i onClick={DecBag} className="fa fa-minus"></i>
                                <p>{addcart}</p>
                                <i onClick={AddCart} className="fa fa-plus"></i>
                            </div>
                        </div>
                        <div className="description">
                            <h5>Description</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="last_section">
                            <button onClick={AddCart}>Add to cart</button>
                            <div className="heart">
                                <i onClick={Heart} className={`fa ${heart ? "fa-heart-o" : "fa-heart"}`}></i>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="card">
                    <i className="fa fa-long-arrow-left"></i>
                    <div className="image">
                        <img src="https://cdn.pixabay.com/photo/2021/10/10/18/08/rice-6697948__480.jpg" />

                    </div>
                    <div className="text">

                        <h3>Rice</h3>
                        <div className="rating_reviews">
                            <div className="rating">
                                <input type="radio" name="rating" value="5" id="5" />
                                <label for="5">☆</label>
                                <input type="radio" name="rating" value="4" id="4" />
                                <label for="4">☆</label>
                                <input type="radio" name="rating" value="3" id="3" />
                                <label for="3">☆</label>
                                <input type="radio" name="rating" value="2" id="2" />
                                <label for="2">☆</label>
                                <input type="radio" name="rating" value="1" id="1" />
                                <label for="1">☆</label>
                            </div>
                            <p>4.7</p>
                            <p>32 reviews</p>
                        </div>

                        <div className="price">
                            <h3>$15.90</h3>
                            <div className="qty">
                                <i onClick={DecBag} className="fa fa-minus"></i>
                                <p>{addcart}</p>
                                <i onClick={AddCart} className="fa fa-plus"></i>
                            </div>
                        </div>
                        <div className="description">
                            <h5>Description</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="last_section">
                            <button onClick={AddCart}>Add to cart</button>
                            <div className="heart">
                                <i onClick={Heart} className={`fa ${heart ? "fa-heart-o" : "fa-heart"}`}></i>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="card">
                    <i className="fa fa-long-arrow-left"></i>
                    <div className="image">
                        <img src="https://media.istockphoto.com/photos/nigerian-egusi-melon-soup-with-garri-eba-for-lunch-nigerian-food-picture-id1387397063?b=1&k=20&m=1387397063&s=170667a&w=0&h=9GC_Sj11w49seW2_6OQkxLI4kZhm3XMHIRfJM4-Ve5c=" />

                    </div>
                    <div className="text">

                        <h3>Soup and Swallow</h3>
                        <div className="rating_reviews">
                            <div className="rating">
                                <input type="radio" name="rating" value="5" id="5" />
                                <label for="5">☆</label>
                                <input type="radio" name="rating" value="4" id="4" />
                                <label for="4">☆</label>
                                <input type="radio" name="rating" value="3" id="3" />
                                <label for="3">☆</label>
                                <input type="radio" name="rating" value="2" id="2" />
                                <label for="2">☆</label>
                                <input type="radio" name="rating" value="1" id="1" />
                                <label for="1">☆</label>
                            </div>
                            <p>4.7</p>
                            <p>32 reviews</p>
                        </div>

                        <div className="price">
                            <h3>$15.90</h3>
                            <div className="qty">
                                <i onClick={DecBag} className="fa fa-minus"></i>
                                <p>{addcart}</p>
                                <i onClick={AddCart} className="fa fa-plus"></i>
                            </div>
                        </div>
                        <div className="description">
                            <h5>Description</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="last_section">
                            <button onClick={AddCart}>Add to cart</button>
                            <div className="heart">
                                <i onClick={Heart} className={`fa ${heart ? "fa-heart-o" : "fa-heart"}`}></i>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="card">
                    <i className="fa fa-long-arrow-left"></i>
                    <div className="image">
                        <img src="https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011__480.jpg" />

                    </div>
                    <div className="text">

                        <h3>Chocolate Cake</h3>
                        <div className="rating_reviews">
                            <div className="rating">
                                <input type="radio" name="rating" value="5" id="5" />
                                <label for="5">☆</label>
                                <input type="radio" name="rating" value="4" id="4" />
                                <label for="4">☆</label>
                                <input type="radio" name="rating" value="3" id="3" />
                                <label for="3">☆</label>
                                <input type="radio" name="rating" value="2" id="2" />
                                <label for="2">☆</label>
                                <input type="radio" name="rating" value="1" id="1" />
                                <label for="1">☆</label>
                            </div>
                            <p>4.7</p>
                            <p>32 reviews</p>
                        </div>

                        <div className="price">
                            <h3>$15.90</h3>
                            <div className="qty">
                                <i onClick={DecBag} className="fa fa-minus"></i>
                                <p>{addcart}</p>
                                <i onClick={AddCart} className="fa fa-plus"></i>
                            </div>
                        </div>
                        <div className="description">
                            <h5>Description</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="last_section">
                            <button onClick={AddCart}>Add to cart</button>
                            <div className="heart">
                                <i onClick={Heart} className={`fa ${heart ? "fa-heart-o" : "fa-heart"}`}></i>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="card">
                    <i className="fa fa-long-arrow-left"></i>
                    <div className="image">
                        <img src="https://cdn.pixabay.com/photo/2017/09/03/01/17/wings-2709068__340.jpg" />

                    </div>
                    <div className="text">

                        <h3>Chicken wings</h3>
                        <div className="rating_reviews">
                            <div className="rating">
                                <input type="radio" name="rating" value="5" id="5" />
                                <label for="5">☆</label>
                                <input type="radio" name="rating" value="4" id="4" />
                                <label for="4">☆</label>
                                <input type="radio" name="rating" value="3" id="3" />
                                <label for="3">☆</label>
                                <input type="radio" name="rating" value="2" id="2" />
                                <label for="2">☆</label>
                                <input type="radio" name="rating" value="1" id="1" />
                                <label for="1">☆</label>
                            </div>
                            <p>4.7</p>
                            <p>32 reviews</p>
                        </div>

                        <div className="price">
                            <h3>$15.90</h3>
                            <div className="qty">
                                <i onClick={DecBag} className="fa fa-minus"></i>
                                <p>{addcart}</p>
                                <i onClick={AddCart} className="fa fa-plus"></i>
                            </div>
                        </div>
                        <div className="description">
                            <h5>Description</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="last_section">
                            <button onClick={AddCart}>Add to cart</button>
                            <div className="heart">
                                <i onClick={Heart} className={`fa ${heart ? "fa-heart-o" : "fa-heart"}`}></i>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="card">
                    <i className="fa fa-long-arrow-left"></i>
                    <div className="image">
                        <img src="https://cdn.pixabay.com/photo/2014/09/11/11/17/prawn-441623__480.jpg" />

                    </div>
                    <div className="text">

                        <h3>Pasta</h3>
                        <div className="rating_reviews">
                            <div className="rating">
                                <input type="radio" name="rating" value="5" id="5" />
                                <label for="5">☆</label>
                                <input type="radio" name="rating" value="4" id="4" />
                                <label for="4">☆</label>
                                <input type="radio" name="rating" value="3" id="3" />
                                <label for="3">☆</label>
                                <input type="radio" name="rating" value="2" id="2" />
                                <label for="2">☆</label>
                                <input type="radio" name="rating" value="1" id="1" />
                                <label for="1">☆</label>
                            </div>
                            <p>4.7</p>
                            <p>32 reviews</p>
                        </div>

                        <div className="price">
                            <h3>$15.90</h3>
                            <div className="qty">
                                <i onClick={DecBag} className="fa fa-minus"></i>
                                <p>{addcart}</p>
                                <i onClick={AddCart} className="fa fa-plus"></i>
                            </div>
                        </div>
                        <div className="description">
                            <h5>Description</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="last_section">
                            <button onClick={AddCart}>Add to cart</button>
                            <div className="heart">
                                <i onClick={Heart} className={`fa ${heart ? "fa-heart-o" : "fa-heart"}`}></i>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="card">
                    <i className="fa fa-long-arrow-left"></i>
                    <div className="image">
                        <img src="https://cdn.pixabay.com/photo/2016/01/26/00/53/potatoe-1161819__480.jpg" />

                    </div>
                    <div className="text">

                        <h3>Fries</h3>
                        <div className="rating_reviews">
                            <div className="rating">
                                <input type="radio" name="rating" value="5" id="5" />
                                <label for="5">☆</label>
                                <input type="radio" name="rating" value="4" id="4" />
                                <label for="4">☆</label>
                                <input type="radio" name="rating" value="3" id="3" />
                                <label for="3">☆</label>
                                <input type="radio" name="rating" value="2" id="2" />
                                <label for="2">☆</label>
                                <input type="radio" name="rating" value="1" id="1" />
                                <label for="1">☆</label>
                            </div>
                            <p>4.7</p>
                            <p>32 reviews</p>
                        </div>

                        <div className="price">
                            <h3>$15.90</h3>
                            <div className="qty">
                                <i onClick={DecBag} className="fa fa-minus"></i>
                                <p>{addcart}</p>
                                <i onClick={AddCart} className="fa fa-plus"></i>
                            </div>
                        </div>
                        <div className="description">
                            <h5>Description</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="last_section">
                            <button onClick={AddCart}>Add to cart</button>
                            <div className="heart">
                                <i onClick={Heart} className={`fa ${heart ? "fa-heart-o" : "fa-heart"}`}></i>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </>
    );
}
ReactDOM.render(
    <ProductCard />, document.getElementById("root"));
export default ProductCard