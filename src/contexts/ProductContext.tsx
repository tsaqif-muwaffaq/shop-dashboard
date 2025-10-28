import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Product } from '../types'

interface ProductContextValue {
  products: Product[]
  loading: boolean
  error: string | null
  addProduct: (p: Omit<Product,'id'>)=>void
  updateProduct: (id:number, patch:Partial<Product>)=>void
  removeProduct: (id:number)=>void
  refresh: ()=>void
}

const ProductContext = createContext<ProductContextValue | undefined>(undefined)

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchProducts = async () => {
    setLoading(true); setError(null)
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setProducts(data)
    } catch (err:any) {
      setError(err.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{ fetchProducts() }, [])

  const addProduct = (p: Omit<Product,'id'>) => {
    const id = products.length ? Math.max(...products.map(x=>x.id))+1 : 1
    setProducts(prev=>[{...p,id}, ...prev])
  }
  const updateProduct = (id:number, patch:Partial<Product>) => {
    setProducts(prev=>prev.map(p=>p.id===id?{...p,...patch}:p))
  }
  const removeProduct = (id:number) => setProducts(prev=>prev.filter(p=>p.id!==id))
  const refresh = ()=> fetchProducts()

  return <ProductContext.Provider value={{products,loading,error,addProduct,updateProduct,removeProduct,refresh}}>{children}</ProductContext.Provider>
}

export const useProductContext = () => {
  const ctx = useContext(ProductContext)
  if (!ctx) throw new Error('useProductContext must be used within ProductProvider')
  return ctx
}
