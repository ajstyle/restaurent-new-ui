
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject , of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL = 'https://restaurantsbackend.herokuapp.com';
//const URL = 'http://localhost:5000'

@Injectable()
export class ApiService {
  constructor(private http: HttpClient){}
  paymentStripe(token , data){
    const total = data.total ;
    let obj = {token , total} ;
    console.log('object-----',obj);
    return this.http.post(`${URL}/payment/payme`,obj);
  }


  sendEmail(data){
    console.log('receipt data' , data);
    return this.http.post(`${URL}/receipts/emailReceipt` , data)

  }
  getCustomToken(uid) {
    return this.http.post(`${URL}/firebaseRoutes/customToken` , {uid})
  }
  seaFood() {
    return of(
      [
        {
          "id" : 1 , 
          "Modifiers": {
            "Salsa": [
              {
                "Item": "Extra Salsa Roja",
                "Default": false,
                "Price": 0.25,
                "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                "Quantity": 0
              },
              {
                "Item": "Extra Salsa Verde",
                "Default": false,
                "Price": 0.25,
                "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                "Quantity": 0
              },
              {
                "Item": "Salsa Roja",
                "Default": true,
                "Price": 0,
                "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                "Quantity": 5
              },
              {
                "Item": "Salsa Verde",
                "Default": true,
                "Price": 0,
                "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                "Quantity": 0
              }
            ],
            "Cheese": [
              {
                "Item": "American",
                "Default": false,
                "Price": 0.25,
                "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                "Quantity": 0
              },
              {
                "Item": "American",
                "Default": false,
                "Price": 0.25,
                "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                "Quantity": 11
              }
            ],
            "Vegetables": [
              {
                "Default": true,
                "Price": 0,
                "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                "Quantity": 5,
                "Item": "Cilantro"
              },
              {
                "Default": false,
                "Price": 0,
                "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                "Quantity": 3,
                "Item": "Lettuce"
              },
              {
                "Default": true,
                "Price": 0,
                "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                "Quantity": 5,
                "Item": "Onions"
              },
              {
                "Default": false,
                "Price": 0.25,
                "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                "Quantity": 2,
                "Item": "Pineapple"
              },
              {
                "Default": false,
                "Price": 0.05,
                "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                "Quantity": 2,
                "Item": "Tomatoes"
              },
              {
                "Item": "Jalapenos",
                "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                "Default": false,
                "Price": 0.05,
                "Quantity": 2
              }
            ],
            "Avocado": [
              {
                "Item": "Avocado Slices",
                "Default": true,
                "Price": 0,
                "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                "Quantity": 2
              },
              {
                "Item": "Guacamole",
                "Default": false,
                "Price": 0.5,
                "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                "Quantity": 1
              }
            ]
          },
          "Name": "Shrimp Tacos",
          "category" : ['Category1' , 'Category2'],
          "Price": 3.05,
          "Description": "The tacos are made with corn tortillas. The shrimp is grilled and the taco is garnished with onions, cilantro and hot sauce.",
          "Image": "https://i.imgur.com/4ouOeJs.jpg"
         
        },
        {
          "id" : 2 , 

          "Modifiers": {
            "Salsa": [
              {
                "Item": "Extra Salsa Roja",
                "Default": false,
                "Price": 0.25,
                "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                "Quantity": 0
              },
              {
                "Item": "Extra Salsa Verde",
                "Default": false,
                "Price": 0.25,
                "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                "Quantity": 0
              },
              {
                "Item": "Salsa Roja",
                "Default": true,
                "Price": 0,
                "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                "Quantity": 5
              },
              {
                "Item": "Salsa Verde",
                "Default": true,
                "Price": 0,
                "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                "Quantity": 0
              }
            ],
            "Cheese": [
              {
                "Item": "American",
                "Default": false,
                "Price": 0.25,
                "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                "Quantity": 0
              },
              {
                "Item": "American",
                "Default": false,
                "Price": 0.25,
                "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                "Quantity": 11
              }
            ],
            "Vegetables": [
              {
                "Default": true,
                "Price": 0,
                "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                "Quantity": 5,
                "Item": "Cilantro"
              },
              {
                "Default": false,
                "Price": 0,
                "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                "Quantity": 3,
                "Item": "Lettuce"
              },
              {
                "Default": true,
                "Price": 0,
                "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                "Quantity": 5,
                "Item": "Onions"
              },
              {
                "Default": false,
                "Price": 0.25,
                "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                "Quantity": 2,
                "Item": "Pineapple"
              },
              {
                "Default": false,
                "Price": 0.05,
                "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                "Quantity": 2,
                "Item": "Tomatoes"
              },
              {
                "Item": "Jalapenos",
                "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                "Default": false,
                "Price": 0.05,
                "Quantity": 2
              }
            ],
            "Avocado": [
              {
                "Item": "Avocado Slices",
                "Default": true,
                "Price": 0,
                "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                "Quantity": 2
              },
              {
                "Item": "Guacamole",
                "Default": false,
                "Price": 0.5,
                "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                "Quantity": 1
              }
            ]
          },
          "Name": "Shrimp Quesadilla Tacos",
          "Price": 3.5,
          "Description": "Our Quesadilla Tacos are garnished with pieces of onions and cilantro and drizzled with hot sauce. Each taco is made with corn tortillas.",
          "Image": "https://i.imgur.com/XeMEDX2.jpg"
        },
        {
          "id" : 3 , 

          "Name": "Shrimp Taco Combo",
          "Price": 8.99,
          "Description": "Each Taco Plate comes with 2 Shrimp Tacos and a side of rice and beans. The tacos are garnished with pieces of onions and cilantro and drizzled with hot sauce. Each taco is made with corn tortillas.",
          "Modifiers": {
            "Combos": [
              {
                "category": "First Taco",
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ]
              },
              {
                "category": "Second Taco",
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ]
              },
              {
                "category" : "Sides",
                "Sides": [
                  {
                    "Item" : "Rice",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item" : "Double Rice",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.eatingonadime.com/wp-content/uploads/2014/07/crock-pot-refried-beans-square.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item" : "Beans",
                    "Default": false,
                    "Price": 0,
                    "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item" : "Double Beans",
                    "Default": false,
                    "Price": 0,
                    "Image": "https://www.eatingonadime.com/wp-content/uploads/2014/07/crock-pot-refried-beans-square.jpg",
                    "Quantity": 2
                  }
                ]
              }
            ]
          },
          "Image": "https://i.imgur.com/SWsaeVo.png"
        },
        {
          "id" : 4 , 

          "Modifiers": {
            "Salsa": [
              {
                "Item": "Extra Salsa Roja",
                "Default": false,
                "Price": 0.25,
                "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                "Quantity": 0
              },
              {
                "Item": "Extra Salsa Verde",
                "Default": false,
                "Price": 0.25,
                "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                "Quantity": 0
              },
              {
                "Item": "Salsa Roja",
                "Default": true,
                "Price": 0,
                "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                "Quantity": 5
              },
              {
                "Item": "Salsa Verde",
                "Default": true,
                "Price": 0,
                "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                "Quantity": 0
              }
            ],
            "Cheese": [
              {
                "Item": "American",
                "Default": false,
                "Price": 0.25,
                "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                "Quantity": 0
              },
              {
                "Item": "American",
                "Default": false,
                "Price": 0.25,
                "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                "Quantity": 11
              }
            ],
            "Vegetables": [
              {
                "Default": true,
                "Price": 0,
                "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                "Quantity": 5,
                "Item": "Cilantro"
              },
              {
                "Default": false,
                "Price": 0,
                "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                "Quantity": 3,
                "Item": "Lettuce"
              },
              {
                "Default": true,
                "Price": 0,
                "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                "Quantity": 5,
                "Item": "Onions"
              },
              {
                "Default": false,
                "Price": 0.25,
                "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                "Quantity": 2,
                "Item": "Pineapple"
              },
              {
                "Default": false,
                "Price": 0.05,
                "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                "Quantity": 2,
                "Item": "Tomatoes"
              },
              {
                "Item": "Jalapenos",
                "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                "Default": false,
                "Price": 0.05,
                "Quantity": 2
              }
            ],
            "Avocado": [
              {
                "Item": "Avocado Slices",
                "Default": true,
                "Price": 0,
                "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                "Quantity": 2
              },
              {
                "Item": "Guacamole",
                "Default": false,
                "Price": 0.5,
                "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                "Quantity": 1
              }
            ]
          },
          "Name": "Shrimp Quesadilla",
          "Price": 10.5,
          "Description": "We use a 12\" flour tortilla for each quesadilla. The quesadillas come with a layer of mixed Monterey and Cheddar cheese, grilled shrimp, onions, cilantro, hot sauce, shredded lettuce and another layer of cheese. We fold the tortilla in half, coat the top with mayonnaise and grill it until it becomes crunchy.",
          "Image": "https://i.imgur.com/lXoU575.jpg"
        },
        {
          "id" : 5 , 

          "Modifiers": {
            "Combos": [
              {
                "category": "Vegetables",
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ]
              },
              {
                "category" : "Sides",
                "Sides": [
                  {
                    "Item" : "Rice",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item" : "Double Rice",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.eatingonadime.com/wp-content/uploads/2014/07/crock-pot-refried-beans-square.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item" : "Beans",
                    "Default": false,
                    "Price": 0,
                    "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item" : "Double Beans",
                    "Default": false,
                    "Price": 0,
                    "Image": "https://www.eatingonadime.com/wp-content/uploads/2014/07/crock-pot-refried-beans-square.jpg",
                    "Quantity": 2
                  }
                ]
              }
            ]
          },
          "Name": "Camarones Rancheros",
          "Price": 11.5,
          "Description": "The Shrimp is grilled with onions, tomatoes, bell peppers and jalapeños. Once the shrimp and veggies are cooked, it's drizzled with a special red sauce. The plate comes with a side of rice and beans.",
          "Image": "https://i.imgur.com/DZL7mTA.jpg"
        },
        {
          "id" : 6 , 

          "Modifiers": {
            "Combos": [
              {
                "category" : "Sides",
                "Sides": [
                  {
                    "Item" : "Rice",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item" : "Double Rice",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.eatingonadime.com/wp-content/uploads/2014/07/crock-pot-refried-beans-square.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item" : "Beans",
                    "Default": false,
                    "Price": 0,
                    "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item" : "Double Beans",
                    "Default": false,
                    "Price": 0,
                    "Image": "https://www.eatingonadime.com/wp-content/uploads/2014/07/crock-pot-refried-beans-square.jpg",
                    "Quantity": 2
                  }
                ]
              }
            ]
          },
          "Name": "Camarones a la Diabla",
          "Price": 11.5,
          "Description": "The Shrimp is cooked with our Special Camarones A La Diabla Salsa Mix creating a delicious spicy soup. The plate comes with a side of rice and beans.",
          "Image": "https://i.imgur.com/lU4IyiY.jpg"
        },
        {
          "id" : 7 , 

          "Description": "The Tostada de Camaron is made with shrimp, tomatoes, cucumbers, onions and cilantro, and mixed with our secret sauce.It comes with a side of tortilla chips.",
          "Name": "Shrimp Tostada",
          "Modifiers": {
            "Vegetables": [
              {
                "Default": true,
                "Price": 0,
                "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                "Quantity": 5,
                "Item": "Cilantro"
              },
              {
                "Default": false,
                "Price": 0,
                "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                "Quantity": 3,
                "Item": "Lettuce"
              },
              {
                "Default": true,
                "Price": 0,
                "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                "Quantity": 5,
                "Item": "Onions"
              },
              {
                "Default": false,
                "Price": 0.25,
                "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                "Quantity": 2,
                "Item": "Pineapple"
              },
              {
                "Default": false,
                "Price": 0.05,
                "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                "Quantity": 2,
                "Item": "Tomatoes"
              },
              {
                "Item": "Jalapenos",
                "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                "Default": false,
                "Price": 0.05,
                "Quantity": 2
              },
              {
                "Item" : "Cucumbers",
                "Default": true,
                "Price": 0,
                "Image": "https://www.healthline.com/hlcmsresource/images/AN_images/AN88-Cucumbers-732x549-thumb.jpg",
                "Quantity": 1
              }
            ],
            "Avocado": [
              {
                "Item": "Avocado Slices",
                "Default": true,
                "Price": 0,
                "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                "Quantity": 2
              },
              {
                "Item": "Guacamole",
                "Default": false,
                "Price": 0.5,
                "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                "Quantity": 1
              }
            ],
            "Spice Level": [
              { 
                "Level" : "Normal",
                "Default": true,
                "Price": 0
              },
              {
                "Level" : "Not Hot Sauce",
                "Default": false,
                "Price": 0
              },
              {
                "Level" : "Hot",
                "Default": false,
                "Price": 0
              },
              {
                "Level" : "Uff",
                "Default": false,
                "Price": 0
              }
            ]
          },
          "Price": 9.99,
          "Image": "https://i.imgur.com/NbZFf1W.jpg"
        }
        
      ])
  } 
 

  mexicanFood() {
    return of([
      {
        "Description": "We use a 12\" flour tortilla for each burrito. The burritos come with your choice of meat, rice, beans, onions, cilantro, hot sauce, and shredded lettuce.",
        "Meat_Choices": "Carne Asada, Al Pastor, Barbacoa and Chicken",
        "Image": "https://i.imgur.com/Dh7fjnw.jpg",
        "Name": "Burrito",
        "Modifiers": {
          "Meat": [
            {
              "Item": "Carne Asada",
              "Default": false,
              "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Al Pastor",
              "Default": false,
              "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Barbacoa",
              "Default": false,
              "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Chicken",
              "Default": false,
              "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Shrimp",
              "Default": false,
              "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
              "Price": 1,
              "Quantity": 8
            }
          ],
          "Beans": [
            {
            "Item" : "Beans",
            "Default": false,
            "Price": 0,
            "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
            "Quantity": 2
            },
            {
              "Item" : "Extra Beans",
              "Default": false,
              "Price": 0.50,
              "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
              "Quantity": 2
            }
          ],
          "Rice": [
            {
            "Item" : "Rice",
            "Default": false,
            "Price": 0,
            "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
            "Quantity": 2
            },
            {
              "Item" : "Extra Rice",
              "Default": false,
              "Price": 0.50,
              "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
              "Quantity": 2
            }
          ],
          "Salsa": [
            {
              "Item": "Extra Salsa Roja",
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 0
            },
            {
              "Item": "Extra Salsa Verde",
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 0
            },
            {
              "Item": "Salsa Roja",
              "Default": true,
              "Price": 0,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 5
            },
            {
              "Item": "Salsa Verde",
              "Default": true,
              "Price": 0,
              "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
              "Quantity": 0
            }
          ],
          "Cheese": [
            {
              "Item": "American",
              "Default": false,
              "Price": 0.25,
              "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
              "Quantity": 0
            },
            {
              "Item": "American",
              "Default": false,
              "Price": 0.25,
              "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
              "Quantity": 11
            }
          ],
          "Vegetables": [
            {
              "Default": true,
              "Price": 0,
              "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
              "Quantity": 5,
              "Item": "Cilantro"
            },
            {
              "Default": false,
              "Price": 0,
              "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
              "Quantity": 3,
              "Item": "Lettuce"
            },
            {
              "Default": true,
              "Price": 0,
              "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
              "Quantity": 5,
              "Item": "Onions"
            },
            {
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
              "Quantity": 2,
              "Item": "Pineapple"
            },
            {
              "Default": false,
              "Price": 0.05,
              "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
              "Quantity": 2,
              "Item": "Tomatoes"
            },
            {
              "Item": "Jalapenos",
              "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
              "Default": false,
              "Price": 0.05,
              "Quantity": 2
            }
          ],
          "Avocado": [
            {
              "Item": "Avocado Slices",
              "Default": true,
              "Price": 0,
              "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
              "Quantity": 2
            },
            {
              "Item": "Guacamole",
              "Default": false,
              "Price": 0.5,
              "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
              "Quantity": 1
            }
          ]
        },
        "Price": 5.5
      },
      {
        "Description": "The Tacos garnished with pieces of onions and cilantro and drizzled with hot sauce. Each taco is made with corn tortillas.",
        "Meat_Choices": "Carne Asada, Al Pastor, Barbacoa and Chicken",
        "Image": "https://i.imgur.com/kRpqzke.jpg",
        "Name": "Tacos",
        "Modifiers": {
          "Meat": [
            {
              "Item": "Carne Asada",
              "Default": false,
              "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Al Pastor",
              "Default": false,
              "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Barbacoa",
              "Default": false,
              "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Chicken",
              "Default": false,
              "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Shrimp",
              "Default": false,
              "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
              "Price": 1,
              "Quantity": 8
            }
          ],
          "Salsa": [
            {
              "Item": "Extra Salsa Roja",
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 0
            },
            {
              "Item": "Extra Salsa Verde",
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 0
            },
            {
              "Item": "Salsa Roja",
              "Default": true,
              "Price": 0,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 5
            },
            {
              "Item": "Salsa Verde",
              "Default": true,
              "Price": 0,
              "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
              "Quantity": 0
            }
          ],
          "Cheese": [
            {
              "Item": "American",
              "Default": false,
              "Price": 0.25,
              "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
              "Quantity": 0
            },
            {
              "Item": "American",
              "Default": false,
              "Price": 0.25,
              "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
              "Quantity": 11
            }
          ],
          "Vegetables": [
            {
              "Default": true,
              "Price": 0,
              "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
              "Quantity": 5,
              "Item": "Cilantro"
            },
            {
              "Default": false,
              "Price": 0,
              "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
              "Quantity": 3,
              "Item": "Lettuce"
            },
            {
              "Default": true,
              "Price": 0,
              "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
              "Quantity": 5,
              "Item": "Onions"
            },
            {
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
              "Quantity": 2,
              "Item": "Pineapple"
            },
            {
              "Default": false,
              "Price": 0.05,
              "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
              "Quantity": 2,
              "Item": "Tomatoes"
            },
            {
              "Item": "Jalapenos",
              "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
              "Default": false,
              "Price": 0.05,
              "Quantity": 2
            }
          ],
          "Avocado": [
            {
              "Item": "Avocado Slices",
              "Default": true,
              "Price": 0,
              "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
              "Quantity": 2
            },
            {
              "Item": "Guacamole",
              "Default": false,
              "Price": 0.5,
              "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
              "Quantity": 1
            }
          ]
        },
        "Price": 2.05
      },
      {
        "Description": "Our Quesadilla Tacos are garnished with pieces of onions and cilantro and drizzled with hot sauce. Each taco is made with corn tortillas.",
        "Meat_Choices": "Carne Asada, Al Pastor, Barbacoa, and Chicken",
        "Name": "Quesadilla Tacos",
        "Image": "https://i.imgur.com/JyhtY1Q.jpg",
        "Modifiers": {
          "Meat": [
            {
              "Item": "Carne Asada",
              "Default": false,
              "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Al Pastor",
              "Default": false,
              "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Barbacoa",
              "Default": false,
              "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Chicken",
              "Default": false,
              "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Shrimp",
              "Default": false,
              "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
              "Price": 1,
              "Quantity": 8
            }
          ],
          "Salsa": [
            {
              "Item": "Extra Salsa Roja",
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 0
            },
            {
              "Item": "Extra Salsa Verde",
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 0
            },
            {
              "Item": "Salsa Roja",
              "Default": true,
              "Price": 0,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 5
            },
            {
              "Item": "Salsa Verde",
              "Default": true,
              "Price": 0,
              "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
              "Quantity": 0
            }
          ],
          "Cheese": [
            {
              "Item": "American",
              "Default": false,
              "Price": 0.25,
              "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
              "Quantity": 0
            },
            {
              "Item": "American",
              "Default": false,
              "Price": 0.25,
              "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
              "Quantity": 11
            }
          ],
          "Vegetables": [
            {
              "Default": true,
              "Price": 0,
              "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
              "Quantity": 5,
              "Item": "Cilantro"
            },
            {
              "Default": false,
              "Price": 0,
              "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
              "Quantity": 3,
              "Item": "Lettuce"
            },
            {
              "Default": true,
              "Price": 0,
              "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
              "Quantity": 5,
              "Item": "Onions"
            },
            {
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
              "Quantity": 2,
              "Item": "Pineapple"
            },
            {
              "Default": false,
              "Price": 0.05,
              "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
              "Quantity": 2,
              "Item": "Tomatoes"
            },
            {
              "Item": "Jalapenos",
              "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
              "Default": false,
              "Price": 0.05,
              "Quantity": 2
            }
          ],
          "Avocado": [
            {
              "Item": "Avocado Slices",
              "Default": true,
              "Price": 0,
              "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
              "Quantity": 2
            },
            {
              "Item": "Guacamole",
              "Default": false,
              "Price": 0.5,
              "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
              "Quantity": 1
            }
          ]
        },
        "Price": 2.5
      },
      {
        "Description": "The chicken is cooked with onions, tomatoes, and jalapeños. Once the chicken and veggies are cooked, it's drizzled with a special red sauce. The plate comes with a side of rice,beans and a flour tortilla.",
        "Name": "Fajitas de Pollo",
        "Image": "https://i.imgur.com/BOne2Hl.jpg",
        "Modifiers": {
          "Combos": [
            {
              "category": "Vegetables",
              "Vegetables": [
                {
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                  "Quantity": 5,
                  "Item": "Cilantro"
                },
                {
                  "Default": false,
                  "Price": 0,
                  "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                  "Quantity": 3,
                  "Item": "Lettuce"
                },
                {
                  "Default": true,
                  "Price": 0,
                  "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                  "Quantity": 5,
                  "Item": "Onions"
                },
                {
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                  "Quantity": 2,
                  "Item": "Pineapple"
                },
                {
                  "Default": false,
                  "Price": 0.05,
                  "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                  "Quantity": 2,
                  "Item": "Tomatoes"
                },
                {
                  "Item": "Jalapenos",
                  "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                  "Default": false,
                  "Price": 0.05,
                  "Quantity": 2
                }
              ],
              "Avocado": [
                {
                  "Item": "Avocado Slices",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                  "Quantity": 2
                },
                {
                  "Item": "Guacamole",
                  "Default": false,
                  "Price": 0.5,
                  "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                  "Quantity": 1
                }
              ]
            },
            {
              "category" : "Sides",
              "Sides": [
                {
                  "Item" : "Rice",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                  "Quantity": 2
                },
                {
                  "Item" : "Double Rice",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.eatingonadime.com/wp-content/uploads/2014/07/crock-pot-refried-beans-square.jpg",
                  "Quantity": 2
                },
                {
                  "Item" : "Beans",
                  "Default": false,
                  "Price": 0,
                  "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                  "Quantity": 2
                },
                {
                  "Item" : "Double Beans",
                  "Default": false,
                  "Price": 0,
                  "Image": "https://www.eatingonadime.com/wp-content/uploads/2014/07/crock-pot-refried-beans-square.jpg",
                  "Quantity": 2
                }
              ]
            }
          ]
        },
        "Price": 10.99
      },
      {
        "Description": "The Carne Asada meat is cooked with onions, tomatoes, bell peppers and jalapeños. Once the meat and veggies are cooked, it's drizzled with a special red sauce. The plate comes with a side of rice, beans and a flour tortilla.",
        "Name": "Steak Ranchero",
        "Image": "https://i.imgur.com/HmTdtgE.jpg",
        "Modifiers": {
          "Combos": [
            {
              "category": "Vegetables",
              "Vegetables": [
                {
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                  "Quantity": 5,
                  "Item": "Cilantro"
                },
                {
                  "Default": false,
                  "Price": 0,
                  "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                  "Quantity": 3,
                  "Item": "Lettuce"
                },
                {
                  "Default": true,
                  "Price": 0,
                  "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                  "Quantity": 5,
                  "Item": "Onions"
                },
                {
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                  "Quantity": 2,
                  "Item": "Pineapple"
                },
                {
                  "Default": false,
                  "Price": 0.05,
                  "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                  "Quantity": 2,
                  "Item": "Tomatoes"
                },
                {
                  "Item": "Jalapenos",
                  "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                  "Default": false,
                  "Price": 0.05,
                  "Quantity": 2
                }
              ],
              "Avocado": [
                {
                  "Item": "Avocado Slices",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                  "Quantity": 2
                },
                {
                  "Item": "Guacamole",
                  "Default": false,
                  "Price": 0.5,
                  "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                  "Quantity": 1
                }
              ]
            },
            {
              "category" : "Sides",
              "Sides": [
                {
                  "Item" : "Rice",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                  "Quantity": 2
                },
                {
                  "Item" : "Double Rice",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.eatingonadime.com/wp-content/uploads/2014/07/crock-pot-refried-beans-square.jpg",
                  "Quantity": 2
                },
                {
                  "Item" : "Beans",
                  "Default": false,
                  "Price": 0,
                  "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                  "Quantity": 2
                },
                {
                  "Item" : "Double Beans",
                  "Default": false,
                  "Price": 0,
                  "Image": "https://www.eatingonadime.com/wp-content/uploads/2014/07/crock-pot-refried-beans-square.jpg",
                  "Quantity": 2
                }
              ]
            }
          ]
        },
        "Price": 10.99
      },
      {
        "Description": "We create layered nachos meaning that we first put a layer of chips, followed by the first layer of cheese, followed by another layer of chips. After the preparation layers are set, we put some beans, choice of meat, another layer of cheese to make sure it's a cheesey experience. We then add the toppings which are onions, cilantro, and hot sauce of choice to your nachos.",
        "Meat_Choices": "Carne Asada, Al Pastor, Barbacoa, and Chicken",
        "Name": "Super Nachos",
        "Image": "https://i.imgur.com/VXvq8n4.jpg",
        "Modifiers": {
          "Meat": [
            {
              "Item": "Carne Asada",
              "Default": false,
              "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Al Pastor",
              "Default": false,
              "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Barbacoa",
              "Default": false,
              "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Chicken",
              "Default": false,
              "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Shrimp",
              "Default": false,
              "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
              "Price": 1,
              "Quantity": 8
            }
          ],
          "Beans": [
            {
            "Item" : "Beans",
            "Default": false,
            "Price": 0,
            "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
            "Quantity": 2
            },
            {
              "Item" : "Extra Beans",
              "Default": false,
              "Price": 0.50,
              "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
              "Quantity": 2
            }
          ],
          "Rice": [
            {
            "Item" : "Rice",
            "Default": false,
            "Price": 0,
            "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
            "Quantity": 2
            },
            {
              "Item" : "Extra Rice",
              "Default": false,
              "Price": 0.50,
              "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
              "Quantity": 2
            }
          ],
          "Salsa": [
            {
              "Item": "Extra Salsa Roja",
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 0
            },
            {
              "Item": "Extra Salsa Verde",
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 0
            },
            {
              "Item": "Salsa Roja",
              "Default": true,
              "Price": 0,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 5
            },
            {
              "Item": "Salsa Verde",
              "Default": true,
              "Price": 0,
              "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
              "Quantity": 0
            }
          ],
          "Cheese": [
            {
              "Item": "American",
              "Default": false,
              "Price": 0.25,
              "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
              "Quantity": 0
            },
            {
              "Item": "American",
              "Default": false,
              "Price": 0.25,
              "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
              "Quantity": 11
            }
          ],
          "Vegetables": [
            {
              "Default": true,
              "Price": 0,
              "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
              "Quantity": 5,
              "Item": "Cilantro"
            },
            {
              "Default": false,
              "Price": 0,
              "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
              "Quantity": 3,
              "Item": "Lettuce"
            },
            {
              "Default": true,
              "Price": 0,
              "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
              "Quantity": 5,
              "Item": "Onions"
            },
            {
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
              "Quantity": 2,
              "Item": "Pineapple"
            },
            {
              "Default": false,
              "Price": 0.05,
              "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
              "Quantity": 2,
              "Item": "Tomatoes"
            },
            {
              "Item": "Jalapenos",
              "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
              "Default": false,
              "Price": 0.05,
              "Quantity": 2
            }
          ],
          "Avocado": [
            {
              "Item": "Avocado Slices",
              "Default": true,
              "Price": 0,
              "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
              "Quantity": 2
            },
            {
              "Item": "Guacamole",
              "Default": false,
              "Price": 0.5,
              "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
              "Quantity": 1
            }
          ]
        },
        "Price": 9.5
      },
      {
        "Description": "We use a 12\" flour tortilla for each quesadilla. The quesadillas come with a layer of mixed Monterey and Cheddar cheese, your choice of meat[Carne Asada, Al Pastor, or Pollo], onions, cilantro, hot sauce, shredded lettuce and another layer of cheese. We fold the tortilla in half, coat the top with mayonnaise and grill it until it becomes crunchy.",
        "Meat_Choices": "Carne Asada, Al Pastor, Barbacoa, and Chicken",
        "Name": "Super Quesadilla",
        "Image": "https://i.imgur.com/mMd5x1w.jpg",
        "Modifiers": {
          "Meat": [
            {
              "Item": "Carne Asada",
              "Default": false,
              "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Al Pastor",
              "Default": false,
              "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Barbacoa",
              "Default": false,
              "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Chicken",
              "Default": false,
              "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Shrimp",
              "Default": false,
              "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
              "Price": 1,
              "Quantity": 8
            }
          ],
          "Salsa": [
            {
              "Item": "Extra Salsa Roja",
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 0
            },
            {
              "Item": "Extra Salsa Verde",
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 0
            },
            {
              "Item": "Salsa Roja",
              "Default": true,
              "Price": 0,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 5
            },
            {
              "Item": "Salsa Verde",
              "Default": true,
              "Price": 0,
              "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
              "Quantity": 0
            }
          ],
          "Cheese": [
            {
              "Item": "American",
              "Default": false,
              "Price": 0.25,
              "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
              "Quantity": 0
            },
            {
              "Item": "American",
              "Default": false,
              "Price": 0.25,
              "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
              "Quantity": 11
            }
          ],
          "Vegetables": [
            {
              "Default": true,
              "Price": 0,
              "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
              "Quantity": 5,
              "Item": "Cilantro"
            },
            {
              "Default": false,
              "Price": 0,
              "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
              "Quantity": 3,
              "Item": "Lettuce"
            },
            {
              "Default": true,
              "Price": 0,
              "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
              "Quantity": 5,
              "Item": "Onions"
            },
            {
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
              "Quantity": 2,
              "Item": "Pineapple"
            },
            {
              "Default": false,
              "Price": 0.05,
              "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
              "Quantity": 2,
              "Item": "Tomatoes"
            },
            {
              "Item": "Jalapenos",
              "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
              "Default": false,
              "Price": 0.05,
              "Quantity": 2
            }
          ],
          "Avocado": [
            {
              "Item": "Avocado Slices",
              "Default": true,
              "Price": 0,
              "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
              "Quantity": 2
            },
            {
              "Item": "Guacamole",
              "Default": false,
              "Price": 0.5,
              "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
              "Quantity": 1
            }
          ]
        },
        "Price": 6.5
      },
      {
        "Description": "Each Taco Plate comes with 3 Tacos with any meat choice and a side of rice and beans. The tacos are garnished with pieces of onions and cilantro and drizzled with hot sauce. Each taco is made with corn tortillas.",
        "Meat_Choices": "Carne Asada, Al Pastor, Barbacoa and Chicken",
        "Name": "Taco Combo",
        "Image": "https://i.imgur.com/nXqtVki.jpg",
        "Modifiers": {
          "Combos": [
            {
              "category": "First Taco",
              "Meat": [
                {
                  "Item": "Carne Asada",
                  "Default": false,
                  "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                  "Price": 0,
                  "Quantity": 8
                },
                {
                  "Item": "Al Pastor",
                  "Default": false,
                  "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                  "Price": 0,
                  "Quantity": 8
                },
                {
                  "Item": "Barbacoa",
                  "Default": false,
                  "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                  "Price": 0,
                  "Quantity": 8
                },
                {
                  "Item": "Chicken",
                  "Default": false,
                  "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                  "Price": 0,
                  "Quantity": 8
                },
                {
                  "Item": "Shrimp",
                  "Default": false,
                  "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                  "Price": 1,
                  "Quantity": 8
                }
              ],
              "Salsa": [
                {
                  "Item": "Extra Salsa Roja",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                  "Quantity": 0
                },
                {
                  "Item": "Extra Salsa Verde",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                  "Quantity": 0
                },
                {
                  "Item": "Salsa Roja",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                  "Quantity": 5
                },
                {
                  "Item": "Salsa Verde",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                  "Quantity": 0
                }
              ],
              "Cheese": [
                {
                  "Item": "American",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                  "Quantity": 0
                },
                {
                  "Item": "American",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                  "Quantity": 11
                }
              ],
              "Vegetables": [
                {
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                  "Quantity": 5,
                  "Item": "Cilantro"
                },
                {
                  "Default": false,
                  "Price": 0,
                  "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                  "Quantity": 3,
                  "Item": "Lettuce"
                },
                {
                  "Default": true,
                  "Price": 0,
                  "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                  "Quantity": 5,
                  "Item": "Onions"
                },
                {
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                  "Quantity": 2,
                  "Item": "Pineapple"
                },
                {
                  "Default": false,
                  "Price": 0.05,
                  "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                  "Quantity": 2,
                  "Item": "Tomatoes"
                },
                {
                  "Item": "Jalapenos",
                  "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                  "Default": false,
                  "Price": 0.05,
                  "Quantity": 2
                }
              ],
              "Avocado": [
                {
                  "Item": "Avocado Slices",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                  "Quantity": 2
                },
                {
                  "Item": "Guacamole",
                  "Default": false,
                  "Price": 0.5,
                  "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                  "Quantity": 1
                }
              ]
            },
            {
              "category": "Second Taco",
              "Meat": [
                {
                  "Item": "Carne Asada",
                  "Default": false,
                  "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                  "Price": 0,
                  "Quantity": 8
                },
                {
                  "Item": "Al Pastor",
                  "Default": false,
                  "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                  "Price": 0,
                  "Quantity": 8
                },
                {
                  "Item": "Barbacoa",
                  "Default": false,
                  "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                  "Price": 0,
                  "Quantity": 8
                },
                {
                  "Item": "Chicken",
                  "Default": false,
                  "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                  "Price": 0,
                  "Quantity": 8
                },
                {
                  "Item": "Shrimp",
                  "Default": false,
                  "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                  "Price": 1,
                  "Quantity": 8
                }
              ],
              "Salsa": [
                {
                  "Item": "Extra Salsa Roja",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                  "Quantity": 0
                },
                {
                  "Item": "Extra Salsa Verde",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                  "Quantity": 0
                },
                {
                  "Item": "Salsa Roja",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                  "Quantity": 5
                },
                {
                  "Item": "Salsa Verde",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                  "Quantity": 0
                }
              ],
              "Cheese": [
                {
                  "Item": "American",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                  "Quantity": 0
                },
                {
                  "Item": "American",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                  "Quantity": 11
                }
              ],
              "Vegetables": [
                {
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                  "Quantity": 5,
                  "Item": "Cilantro"
                },
                {
                  "Default": false,
                  "Price": 0,
                  "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                  "Quantity": 3,
                  "Item": "Lettuce"
                },
                {
                  "Default": true,
                  "Price": 0,
                  "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                  "Quantity": 5,
                  "Item": "Onions"
                },
                {
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                  "Quantity": 2,
                  "Item": "Pineapple"
                },
                {
                  "Default": false,
                  "Price": 0.05,
                  "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                  "Quantity": 2,
                  "Item": "Tomatoes"
                },
                {
                  "Item": "Jalapenos",
                  "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                  "Default": false,
                  "Price": 0.05,
                  "Quantity": 2
                }
              ],
              "Avocado": [
                {
                  "Item": "Avocado Slices",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                  "Quantity": 2
                },
                {
                  "Item": "Guacamole",
                  "Default": false,
                  "Price": 0.5,
                  "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                  "Quantity": 1
                }
              ]
            },
            {
              "category": "Third Taco",
              "Meat": [
                {
                  "Item": "Carne Asada",
                  "Default": false,
                  "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                  "Price": 0,
                  "Quantity": 8
                },
                {
                  "Item": "Al Pastor",
                  "Default": false,
                  "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                  "Price": 0,
                  "Quantity": 8
                },
                {
                  "Item": "Barbacoa",
                  "Default": false,
                  "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                  "Price": 0,
                  "Quantity": 8
                },
                {
                  "Item": "Chicken",
                  "Default": false,
                  "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                  "Price": 0,
                  "Quantity": 8
                },
                {
                  "Item": "Shrimp",
                  "Default": false,
                  "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                  "Price": 1,
                  "Quantity": 8
                }
              ],
              
              "Salsa": [
                {
                  "Item": "Extra Salsa Roja",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                  "Quantity": 0
                },
                {
                  "Item": "Extra Salsa Verde",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                  "Quantity": 0
                },
                {
                  "Item": "Salsa Roja",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                  "Quantity": 5
                },
                {
                  "Item": "Salsa Verde",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                  "Quantity": 0
                }
              ],
              "Cheese": [
                {
                  "Item": "American",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                  "Quantity": 0
                },
                {
                  "Item": "American",
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                  "Quantity": 11
                }
              ],
              "Vegetables": [
                {
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                  "Quantity": 5,
                  "Item": "Cilantro"
                },
                {
                  "Default": false,
                  "Price": 0,
                  "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                  "Quantity": 3,
                  "Item": "Lettuce"
                },
                {
                  "Default": true,
                  "Price": 0,
                  "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                  "Quantity": 5,
                  "Item": "Onions"
                },
                {
                  "Default": false,
                  "Price": 0.25,
                  "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                  "Quantity": 2,
                  "Item": "Pineapple"
                },
                {
                  "Default": false,
                  "Price": 0.05,
                  "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                  "Quantity": 2,
                  "Item": "Tomatoes"
                },
                {
                  "Item": "Jalapenos",
                  "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                  "Default": false,
                  "Price": 0.05,
                  "Quantity": 2
                }
              ],
              "Avocado": [
                {
                  "Item": "Avocado Slices",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                  "Quantity": 2
                },
                {
                  "Item": "Guacamole",
                  "Default": false,
                  "Price": 0.5,
                  "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                  "Quantity": 1
                }
              ]
            },
            {
              "category" : "Sides",
              "Sides": [
                {
                  "Item" : "Rice",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                  "Quantity": 2
                },
                {
                  "Item" : "Double Rice",
                  "Default": true,
                  "Price": 0,
                  "Image": "https://www.eatingonadime.com/wp-content/uploads/2014/07/crock-pot-refried-beans-square.jpg",
                  "Quantity": 2
                },
                {
                  "Item" : "Beans",
                  "Default": false,
                  "Price": 0,
                  "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                  "Quantity": 2
                },
                {
                  "Item" : "Double Beans",
                  "Default": false,
                  "Price": 0,
                  "Image": "https://www.eatingonadime.com/wp-content/uploads/2014/07/crock-pot-refried-beans-square.jpg",
                  "Quantity": 2
                }
              ]
            }
          ]
        },
        "Price": 8.99
      },
      {
        "Description": "The bread is toasted with mayonnaise, we put beans, your choice of meat, cheese, onions, cilantro, hot sauce, pieces of avocado and shredded lettuce.",
        "Meat_Choices": "Carne Asada, Al Pastor, Barbacoa and Chicken",
        "Name": "Tortas",
        "Image": "https://i.imgur.com/WcUqe4a.jpg",
        "Modifiers": {
          "Meat": [
            {
              "Item": "Carne Asada",
              "Default": false,
              "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Al Pastor",
              "Default": false,
              "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Barbacoa",
              "Default": false,
              "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Chicken",
              "Default": false,
              "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
              "Price": 0,
              "Quantity": 8
            },
            {
              "Item": "Shrimp",
              "Default": false,
              "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
              "Price": 1,
              "Quantity": 8
            }
          ],
          "Beans": [
            {
            "Item" : "Beans",
            "Default": false,
            "Price": 0,
            "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
            "Quantity": 2
            },
            {
              "Item" : "Extra Beans",
              "Default": false,
              "Price": 0.50,
              "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
              "Quantity": 2
            }
          ],
          "Rice": [
            {
            "Item" : "Rice",
            "Default": false,
            "Price": 0,
            "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
            "Quantity": 2
            },
            {
              "Item" : "Extra Rice",
              "Default": false,
              "Price": 0.50,
              "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
              "Quantity": 2
            }
          ],
          "Salsa": [
            {
              "Item": "Extra Salsa Roja",
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 0
            },
            {
              "Item": "Extra Salsa Verde",
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 0
            },
            {
              "Item": "Salsa Roja",
              "Default": true,
              "Price": 0,
              "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
              "Quantity": 5
            },
            {
              "Item": "Salsa Verde",
              "Default": true,
              "Price": 0,
              "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
              "Quantity": 0
            }
          ],
          "Cheese": [
            {
              "Item": "American",
              "Default": false,
              "Price": 0.25,
              "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
              "Quantity": 0
            },
            {
              "Item": "American",
              "Default": false,
              "Price": 0.25,
              "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
              "Quantity": 11
            }
          ],
          "Vegetables": [
            {
              "Default": true,
              "Price": 0,
              "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
              "Quantity": 5,
              "Item": "Cilantro"
            },
            {
              "Default": false,
              "Price": 0,
              "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
              "Quantity": 3,
              "Item": "Lettuce"
            },
            {
              "Default": true,
              "Price": 0,
              "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
              "Quantity": 5,
              "Item": "Onions"
            },
            {
              "Default": false,
              "Price": 0.25,
              "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
              "Quantity": 2,
              "Item": "Pineapple"
            },
            {
              "Default": false,
              "Price": 0.05,
              "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
              "Quantity": 2,
              "Item": "Tomatoes"
            },
            {
              "Item": "Jalapenos",
              "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
              "Default": false,
              "Price": 0.05,
              "Quantity": 2
            }
          ],
          "Avocado": [
            {
              "Item": "Avocado Slices",
              "Default": true,
              "Price": 0,
              "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
              "Quantity": 2
            },
            {
              "Item": "Guacamole",
              "Default": false,
              "Price": 0.5,
              "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
              "Quantity": 1
            }
          ]
        },
        "Price": 5.5
      }
    ])
  }


  dealFood(){
    return  of(
      [
        {
          "Content" : "4 Tacos and a Drink",
          "Meat Choices" : "Carne Asada, Al Pastor, Barbacoa, and Chicken",
          "Image" : "https://i.imgur.com/kRpqzke.jpg",
          "Modifiers": {
            "Combos": [
              {
                "category": "First Taco",
                "Meat": [
                  {
                    "Item": "Carne Asada",
                    "Default": false,
                    "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Al Pastor",
                    "Default": false,
                    "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Barbacoa",
                    "Default": false,
                    "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Chicken",
                    "Default": false,
                    "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Shrimp",
                    "Default": false,
                    "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                    "Price": 1,
                    "Quantity": 8
                  }
                ],
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ]
              },
              {
                "category": "Second Taco",
                "Meat": [
                  {
                    "Item": "Carne Asada",
                    "Default": false,
                    "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Al Pastor",
                    "Default": false,
                    "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Barbacoa",
                    "Default": false,
                    "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Chicken",
                    "Default": false,
                    "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Shrimp",
                    "Default": false,
                    "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                    "Price": 1,
                    "Quantity": 8
                  }
                ],
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ]
              },
              {
                "category": "Third Taco",
                "Meat": [
                  {
                    "Item": "Carne Asada",
                    "Default": false,
                    "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Al Pastor",
                    "Default": false,
                    "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Barbacoa",
                    "Default": false,
                    "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Chicken",
                    "Default": false,
                    "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Shrimp",
                    "Default": false,
                    "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                    "Price": 1,
                    "Quantity": 8
                  }
                ],
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ]
              },
              {
                "category": "Fourth Taco",
                "Meat": [
                  {
                    "Item": "Carne Asada",
                    "Default": false,
                    "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Al Pastor",
                    "Default": false,
                    "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Barbacoa",
                    "Default": false,
                    "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Chicken",
                    "Default": false,
                    "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Shrimp",
                    "Default": false,
                    "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                    "Price": 1,
                    "Quantity": 8
                  }
                ],
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ]
              },
              {
                "category" : "Sides",
                "Sides": [
                  {
                    "Item" : "Rice",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item" : "Double Rice",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.eatingonadime.com/wp-content/uploads/2014/07/crock-pot-refried-beans-square.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item" : "Beans",
                    "Default": false,
                    "Price": 0,
                    "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item" : "Double Beans",
                    "Default": false,
                    "Price": 0,
                    "Image": "https://www.eatingonadime.com/wp-content/uploads/2014/07/crock-pot-refried-beans-square.jpg",
                    "Quantity": 2
                  }
                ]
              },
              {
                "category" : "Drinks",
                "Drinks": [
                  {
                    "Item" : "Coke",
                    "Default": false,
                    "Price": 0.75,
                    "Image": "https://inkbotdesign.com/wp-content/uploads/2018/04/coca-cola-logo-design-2007.png",
                    "Quantity": 2
                  }
                ] 
              }
            ]
          },
          "Name" : "Deal 1",
          "Price" : 8.99
        },
        {
          "Content" : "3 Quesadilla Tacos and a Drink",
          "Meat Choices" : "Carne Asada, Al Pastor, Barbacoa, and Chicken",
          "Image" : "https://i.imgur.com/JyhtY1Q.jpg",
          "Modifiers": {
            "Combos": [
              {
                "category": "First Taco",
                "Meat": [
                  {
                    "Item": "Carne Asada",
                    "Default": false,
                    "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Al Pastor",
                    "Default": false,
                    "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Barbacoa",
                    "Default": false,
                    "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Chicken",
                    "Default": false,
                    "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Shrimp",
                    "Default": false,
                    "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                    "Price": 1,
                    "Quantity": 8
                  }
                ],
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ]
              },
              {
                "category": "Second Taco",
                "Meat": [
                  {
                    "Item": "Carne Asada",
                    "Default": false,
                    "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Al Pastor",
                    "Default": false,
                    "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Barbacoa",
                    "Default": false,
                    "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Chicken",
                    "Default": false,
                    "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Shrimp",
                    "Default": false,
                    "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                    "Price": 1,
                    "Quantity": 8
                  }
                ],
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ]
              },
              {
                "category": "Third Taco",
                "Meat": [
                  {
                    "Item": "Carne Asada",
                    "Default": false,
                    "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Al Pastor",
                    "Default": false,
                    "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Barbacoa",
                    "Default": false,
                    "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Chicken",
                    "Default": false,
                    "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Shrimp",
                    "Default": false,
                    "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                    "Price": 1,
                    "Quantity": 8
                  }
                ],
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ]
              },
              {
                "category" : "Drinks",
                "Drinks": [
                  {
                    "Item" : "Coke",
                    "Default": false,
                    "Price": 0.75,
                    "Image": "https://inkbotdesign.com/wp-content/uploads/2018/04/coca-cola-logo-design-2007.png",
                    "Quantity": 2
                  }
                ] 
              }
            ]
          },
          "Name" : "Deal 2",
          "Price" : 8.99
        },
        {
          "Content" : "3 Shrimp Tacos and a Drink",
          "Image" : "https://i.imgur.com/4ouOeJs.jpg",
          "Modifiers": {
            "Combos": [
              {
                "category": "First Taco",
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ]
              },
              {
                "category": "Second Taco",
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ]
              },
              {
                "category": "Third Taco",
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ]
              },
              {
                "category" : "Drinks",
                "Drinks": [
                  {
                    "Item" : "Coke",
                    "Default": false,
                    "Price": 0.75,
                    "Image": "https://inkbotdesign.com/wp-content/uploads/2018/04/coca-cola-logo-design-2007.png",
                    "Quantity": 2
                  }
                ] 
              }
            ]
          },
          "Name" : "Deal 3",
          "Price" : 9.99
        },
        {
          "Content" : "Quesadilla and a Drink",
          "Image" : "https://i.imgur.com/mMd5x1w.jpg",
          "Meat Choices" : "Carne Asada, Al Pastor, Barbacoa, and Chicken",
          "Modifiers": {
            "Combos": [
              {
                "category": "Toppings",
                "Meat": [
                  {
                    "Item": "Carne Asada",
                    "Default": false,
                    "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Al Pastor",
                    "Default": false,
                    "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Barbacoa",
                    "Default": false,
                    "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Chicken",
                    "Default": false,
                    "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Shrimp",
                    "Default": false,
                    "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                    "Price": 1,
                    "Quantity": 8
                  }
                ],
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ]
              },         
              {
                "category" : "Drinks",
                "Drinks": [
                  {
                    "Item" : "Coke",
                    "Default": false,
                    "Price": 0.75,
                    "Image": "https://inkbotdesign.com/wp-content/uploads/2018/04/coca-cola-logo-design-2007.png",
                    "Quantity": 2
                  }
                ] 
              }
            ]
          },
          "Name" : "Deal 4",
          "Price" : 7.25
        },
        {
          "Content" : "Burrito and a Drink",
          "Meat Choices" : "Carne Asada, Al Pastor, Barbacoa, and Chicken",
          "Image" : "https://i.imgur.com/Dh7fjnw.jpg",
          "Modifiers": {
            "Combos": [
              {
                "category": "Toppings",
                "Meat": [
                  {
                    "Item": "Carne Asada",
                    "Default": false,
                    "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Al Pastor",
                    "Default": false,
                    "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Barbacoa",
                    "Default": false,
                    "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Chicken",
                    "Default": false,
                    "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Shrimp",
                    "Default": false,
                    "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                    "Price": 1,
                    "Quantity": 8
                  }
                ],
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ],
                "Beans": [
                  {
                  "Item" : "Beans",
                  "Default": false,
                  "Price": 0,
                  "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                  "Quantity": 2
                  },
                  {
                    "Item" : "Extra Beans",
                    "Default": false,
                    "Price": 0.50,
                    "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                    "Quantity": 2
                  }
                ],
                "Rice": [
                  {
                  "Item" : "Rice",
                  "Default": false,
                  "Price": 0,
                  "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                  "Quantity": 2
                  },
                  {
                    "Item" : "Extra Rice",
                    "Default": false,
                    "Price": 0.50,
                    "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                    "Quantity": 2
                  }
                ]      
              },         
              {
                "category" : "Drinks",
                "Drinks": [
                  {
                    "Item" : "Coke",
                    "Default": false,
                    "Price": 0.75,
                    "Image": "https://inkbotdesign.com/wp-content/uploads/2018/04/coca-cola-logo-design-2007.png",
                    "Quantity": 2
                  }
                ] 
              }
            ]
          },
          "Name" : "Deal 5",
          "Price" : 6.25
        },
        {
          "Content" : "Torta and a Drink",
          "Meat Choices" : "Carne Asada, Al Pastor, Barbacoa and Chicken",
          "Image" : "https://i.imgur.com/WcUqe4a.jpg",
          "Modifiers": {
            "Combos": [
              {
                "category": "Toppings",
                "Meat": [
                  {
                    "Item": "Carne Asada",
                    "Default": false,
                    "Image": "https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-recipe-500x500.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Al Pastor",
                    "Default": false,
                    "Image": "https://img.buzzfeed.com/video-api-prod/assets/7ae7e369f0b042ab9fdde41c89be6aec/BFV13345_HomemadeAlPastor-ThumbTextless1080.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Barbacoa",
                    "Default": false,
                    "Image": "https://cookinglsl.com/wp-content/uploads/2017/07/easy-Barbacoa-recipe-slow-cooker-3-1-660x924.jpg",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Chicken",
                    "Default": false,
                    "Image": "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2018/06/grilled-chicken-700-0400.jpg?fit=700%2C1050&ssl=1",
                    "Price": 0,
                    "Quantity": 8
                  },
                  {
                    "Item": "Shrimp",
                    "Default": false,
                    "Image": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496355937-skillet-garlic-cilantro-shrimp.jpg",
                    "Price": 1,
                    "Quantity": 8
                  }
                ],
                "Salsa": [
                  {
                    "Item": "Extra Salsa Roja",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Extra Salsa Verde",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "Salsa Roja",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
                    "Quantity": 5
                  },
                  {
                    "Item": "Salsa Verde",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.garlicandzest.com/wp-content/uploads/2017/04/Authentic-Spicy-Tomatillo-Salsa1-7.jpg",
                    "Quantity": 0
                  }
                ],
                "Cheese": [
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://shop.honeyville.com/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/f/r/freeze-dried-cheddar-cheese-new-5.jpg",
                    "Quantity": 0
                  },
                  {
                    "Item": "American",
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://cdnimg.webstaurantstore.com/images/products/large/427865/1587497.jpg",
                    "Quantity": 11
                  }
                ],
                "Vegetables": [
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "https://www.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/732x549_Cilantro_Allergy.jpg",
                    "Quantity": 5,
                    "Item": "Cilantro"
                  },
                  {
                    "Default": false,
                    "Price": 0,
                    "Image": "https://getinspiredeveryday.com/food/wp-content/uploads/sites/5/2015/04/Ancho-Chile-Chicken-Taco-Bowls-GI-365.jpg",
                    "Quantity": 3,
                    "Item": "Lettuce"
                  },
                  {
                    "Default": true,
                    "Price": 0,
                    "Image": "http://cdn.shopify.com/s/files/1/0917/9396/products/diced_onions_grande.jpg?v=1459605830",
                    "Quantity": 5,
                    "Item": "Onions"
                  },
                  {
                    "Default": false,
                    "Price": 0.25,
                    "Image": "https://www.seededatthetable.com/wp-content/uploads/2010/09/5010760134_be11b49c1b.jpg",
                    "Quantity": 2,
                    "Item": "Pineapple"
                  },
                  {
                    "Default": false,
                    "Price": 0.05,
                    "Image": "https://1.bp.blogspot.com/-Ww87UTUssIY/VO3du9hvhoI/AAAAAAAAFws/y_2EPMLwhlQ/s1600/tomatoes.jpg",
                    "Quantity": 2,
                    "Item": "Tomatoes"
                  },
                  {
                    "Item": "Jalapenos",
                    "Image": "https://edge.bonnieplants.com/www/uploads/20180920003952/mammoth-jalapeno-hot-pepper.jpg",
                    "Default": false,
                    "Price": 0.05,
                    "Quantity": 2
                  }
                ],
                "Avocado": [
                  {
                    "Item": "Avocado Slices",
                    "Default": true,
                    "Price": 0,
                    "Image": "https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_420,w_631/v1/img/upload/package/summerentertaining/H2_Slice_Avocado_Slices_6.jpg",
                    "Quantity": 2
                  },
                  {
                    "Item": "Guacamole",
                    "Default": false,
                    "Price": 0.5,
                    "Image": "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe.jpg",
                    "Quantity": 1
                  }
                ],
                "Beans": [
                  {
                  "Item" : "Beans",
                  "Default": false,
                  "Price": 0,
                  "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                  "Quantity": 2
                  },
                  {
                    "Item" : "Extra Beans",
                    "Default": false,
                    "Price": 0.50,
                    "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                    "Quantity": 2
                  }
                ],
                "Rice": [
                  {
                  "Item" : "Rice",
                  "Default": false,
                  "Price": 0,
                  "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                  "Quantity": 2
                  },
                  {
                    "Item" : "Extra Rice",
                    "Default": false,
                    "Price": 0.50,
                    "Image": "https://www.favfamilyrecipes.com/wp-content/uploads/2018/10/Restaurant-Style-Mexican-Rice-500x500.jpg",
                    "Quantity": 2
                  }
                ]      
              },         
              {
                "category" : "Drinks",
                "Drinks": [
                  {
                    "Item" : "Coke",
                    "Default": false,
                    "Price": 0.75,
                    "Image": "https://inkbotdesign.com/wp-content/uploads/2018/04/coca-cola-logo-design-2007.png",
                    "Quantity": 2
                  }
                ] 
              }
            ]
          },
          "Name" : "Deal 6",
          "Price" : 6.25
        }
      ]
    
    )
  }

} 