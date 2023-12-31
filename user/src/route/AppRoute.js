import React, { Component, Fragment } from 'react'
import { Route, Switch } from "react-router";
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import RegisterPage from '../pages/RegisterPage';
import PrivacyPage from '../pages/PrivacyPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/CartPage';
import AboutPage from '../pages/AboutPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';
import AllCategoryPage from '../pages/AllCategoryPage';
import AllAuthorsPage from '../pages/AllAuthorsPage';
import ProductAuthorsPage from '../pages/ProductAuthorsPage';
import SearchPage from '../pages/SearchPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import ProfilePage from '../pages/ProfilePage';
import axios from 'axios' 
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import AppURL from '../api/AppURL';
import OrderListPage from '../pages/OrderListPage';
import OrderHistoryPage from '../pages/OrderHistoryPage';
import ExtendHistoryPage from '../pages/ExtendHistoryPage';
import ReturnHistoryPage from '../pages/ReturnHistoryPage';

class AppRoute extends Component {
     constructor(){
          super();
          this.state={
               user:{}
          }
     }

     componentDidMount(){
          axios.get(AppURL.UserData).then((response) => { 
               this.setUser(response.data)
          }).catch(error=>{

          });
     }


     setUser = (user) => {
          this.setState({user:user})
     }
     render() {
          return (
               <Fragment>
                          <NavMenuDesktop user={this.state.user} setUser={this.setUser} />  
                    <Switch>
                         <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} />} />
                         <Route exact path="/login" render={(props) => <UserLoginPage user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} /> } />
                         <Route exact path="/register" render={(props) => <RegisterPage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} /> } />
                         <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} />} />
                         <Route exact path="/purchase" render={(props) => <PurchasePage {...props} key={Date.now()} />} />
                         <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()} />} />
                         <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} />} />
                         <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} />} />

                         <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()} />} />

                         <Route exact path="/productdetails/:code" render={(props) => <ProductDetailsPage user={this.state.user}  {...props} key={Date.now()} /> } />
                         <Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()} />} />

                         <Route exact path="/favourite" render={(props) => <FavouritePage user={this.state.user} {...props} key={Date.now()} /> } />
                         <Route exact path="/cart" render={(props) => <CartPage user={this.state.user} {...props} key={Date.now()} /> } />
                         <Route exact path="/productcategory/:category" render={(props) => <ProductCategoryPage {...props} key={Date.now()} />} />

                         <Route exact path="/productsubcategory/:category/:subcategory" render={(props) => <ProductSubCategoryPage {...props} key={Date.now()} />} />


                         <Route exact path="/allcategory" render={(props) => <AllCategoryPage {...props} key={Date.now()} />} />
                         <Route exact path="/allauthors" render={(props) => <AllAuthorsPage {...props} key={Date.now()} />} />

                         <Route exact path="/productauthor/:author" render={(props) => <ProductAuthorsPage {...props} key={Date.now()} />} />
                         <Route exact path="/productbysearch/:searchkey" render={(props) => <SearchPage {...props} key={Date.now()} />} />

                         <Route exact path="/forget" render={(props) => <ForgetPasswordPage {...props} key={Date.now()} />} />

                         <Route exact path="/reset/:id" render={(props) => <ResetPasswordPage {...props} key={Date.now()} />} />
                         <Route exact path="/profile" render={(props) => <ProfilePage user={this.state.user} setUser={this.setUser}  {...props} key={Date.now()} /> } />

                         
                         <Route exact path="/orderlist" render={(props) => <OrderListPage user={this.state.user} {...props} key={Date.now()} /> } /> 
                         <Route exact path="/orderlistbyinvoice/:invoice_no" render={(props) => <OrderHistoryPage user={this.state.user} {...props} key={Date.now()} /> } /> 
                         <Route exact path="/extendorderinvoice/:extend_invoice_no" render={(props) => <ExtendHistoryPage user={this.state.user} {...props} key={Date.now()} /> } /> 
                         <Route exact path="/returnlistbyinvoice/:invoice_no" render={(props) => <ReturnHistoryPage user={this.state.user} {...props} key={Date.now()} /> } /> 

                    
                    </Switch>

               </Fragment>
          )
     }
}

export default AppRoute