import React from 'react'
import { Product } from '../types'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProductCard({product}:{product:Product}){
  return (
    <motion.div layout initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-content">
        <h3 style={{fontSize:16,margin:0}}>{product.title}</h3>
        <div style={{color:'var(--muted)'}}>{product.category}</div>
        <div style={{marginTop:8,fontWeight:700}}>Rp {Math.round(product.price * 16000).toLocaleString()}</div>
      </div>
      <div className="card-footer">
        <Link to={`/products/${product.id}`} className="button" style={{textDecoration:'none', width: '100%', textAlign: 'center'}}>Detail</Link>
      </div>
    </motion.div>
  )
}
