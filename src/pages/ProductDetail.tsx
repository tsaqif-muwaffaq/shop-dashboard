import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import { useAuth } from '../contexts/AuthContext';

export default function ProductDetail(){
  const { id } = useParams<{id:string}>()
  const navigate = useNavigate()
  const { products, loading, error } = useProducts()
  const { isAuthenticated } = useAuth();
  const product = products.find(p=>p.id === Number(id))

  if (loading) return <div>Loading product detail...</div>
  if (error) return <div style={{color: 'red'}}>Error: {error}</div>
  if (!product) return <div>Product not found.</div>

  return (
    <div className="product-detail-layout">
      <div style={{flex:1}}>
        <img src={product.image} alt={product.title} style={{maxWidth:420,objectFit:'contain'}} />
      </div>
      <div style={{flex:2}}>
        <h2>{product.title}</h2>
        <div className="badge">{product.category}</div>
        <p style={{marginTop:12}}>{product.description}</p>
        <div style={{marginTop:12,fontWeight:800}}>Rp {Math.round(product.price * 16000).toLocaleString()}</div>
        <div style={{marginTop:12,display:'flex',gap:8}}>
          {isAuthenticated ? (
            <Link to="/dashboard" className="button" style={{textDecoration: 'none'}}>Edit Product</Link>
          ) : (
            <button className="button">Add to Cart</button>
          )}
          <button className="ghost" onClick={()=>navigate(-1)}>Back</button>
        </div>
      </div>
    </div>
  )
}
