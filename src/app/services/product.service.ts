import { Injectable } from '@angular/core';
import { Product } from '../Model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  prod: Array<Product> =[
  {name: 'Bouquet',
  image: 'https://rukminim1.flixcart.com/image/612/612/k0o69ow0/artificial-flower/r/p/j/ysk021007-ysk-creation-original-imafjxbavrvanvjn.jpeg?q=70',
  description: 'Amazing Bouquet available at lower prices',
  imageAlt: 'image not found',
  isAvailable: true,
  price: 1200
  },
  {name: 'Bouquet',
  image: 'https://rukminim1.flixcart.com/image/612/612/j0sg7m80/artificial-flower/y/f/h/artflwr33-styles-creation-original-imaeruf3twrubxha.jpeg?q=70',
  description: 'Beautiful bouquet for  christian brides',
  imageAlt: 'image not found',
  isAvailable: true,
  price: 1600
  },
  {name: 'Bouquet',
  image: 'https://rukminim1.flixcart.com/image/612/612/js3j5ow0/artificial-flower/z/h/k/rose-artificial-flower-stick-rose-flower-bunch-bouquet-of-18-original-imafd7qubtxzwrhq.jpeg?q=70',
  description: 'Crafted artificial flower bouquet',
  imageAlt: 'image not found',
  isAvailable: false,
  price: 1000
  },
  {name: 'Bouquet',
  image: 'https://rukminim1.flixcart.com/image/612/612/jy65j0w0/artificial-flower/3/d/k/artificial-flowers-for-home-or-wedding-decoration-mei-ge-original-imafg6r2yz35md29.jpeg?q=70',
  description: 'Amazing Bouquet available at llower prices',
  imageAlt: 'image not found',
  isAvailable: true,
  price: 990
  },
  {name: 'Bouquet',
  image: 'https://rukminim1.flixcart.com/image/612/612/jh2aqvk0/artificial-flower/t/u/q/ohdbaf-1468-decorebugs-original-imaeznehhbkz6hrz.jpeg?q=70',
  description: 'Amazing Bouquet available at llower prices',
  imageAlt: 'image not found',
  isAvailable: false,
  price: 1050
  },
  {name: 'Bouquet',
  image: 'https://rukminim1.flixcart.com/image/612/612/k0lbdzk0/artificial-flower/y/k/k/ysk021018-ysk-creation-original-imafjyagq97gh9fs.jpeg?q=70',
  description: 'Amazing Bouquet available at lower prices.',
  imageAlt: 'image not found',
  isAvailable: true,
  price: 1700
  },
  {name: 'Bouquet',
  image: 'https://rukminim1.flixcart.com/image/612/612/jmxrwy80/artificial-flower/x/v/g/b07b7lxqjp-satyam-kraft-original-imaf9qh5mctc97wp.jpeg?q=70',
  description: 'Amazing Bouquet available at lower prices..',
  imageAlt: 'image not found',
  isAvailable: true,
  price: 1200
  },
  {name: 'Bouquet',
  image: 'https://rukminim1.flixcart.com/image/612/612/jrqo70w0/artificial-flower/y/x/n/jc02828-jaipurcrafts-original-imafdej6drkxfxqy.jpeg?q=70',
  description: 'Amazing Bouquet available at lower prices',
  imageAlt: 'image not found',
  isAvailable: true,
  price: 1400
  },
  {name: 'Bouquet',
  image: 'https://rukminim1.flixcart.com/image/612/612/js3j5ow0/artificial-flower/z/h/k/rose-artificial-flower-stick-rose-flower-bunch-bouquet-of-18-original-imafd7qubtxzwrhq.jpeg?q=70',
  description: 'Artificial rose bunch with 18 red roses',
  imageAlt: 'image not found',
  isAvailable: true,
  price: 450
  }];
  getProducts() {
    return this.prod;
  }
}
