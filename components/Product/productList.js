import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
  
const ProductList = ({products,type}) => {
    useEffect(()=>{
        console.log("hh",products);

    })
    switch(type){
    case "categoryList":
      return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div style={{maxHeight:'200px'}} className="min-h-80 aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 ">
                    <img
                      src={product.data.pictures[0]}
                      alt={product.data.descriptiom}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link href={`/productDetails?id=${product.id}`}><a>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.data.name}
                        </a></Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.data.category}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${product.data.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )

    default:
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 ">
                  <img
                    src={product.data.pictures[0]}
                    alt={product.data.descriptiom}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/productDetails?id=${product.id}`}><a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.data.name}
                      </a></Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.data.category}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.data.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
    
    }
  }
export default ProductList;