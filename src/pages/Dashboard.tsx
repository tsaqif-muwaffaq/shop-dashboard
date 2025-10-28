import React, { useMemo, useState, useCallback } from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductForm from '../components/ProductForm'
import { Product } from '../types'

export default function Dashboard(){
  const { products, addProduct, updateProduct, removeProduct } = useProducts()
  const total = useMemo(()=> products.length, [products])
  const [editing, setEditing] = useState<Product | null>(null)

  const onAdd = useCallback((p:Omit<Product,'id'>)=>{
    addProduct(p)
  },[addProduct])

  const onUpdate = useCallback((id:number, patch:Partial<Product>)=>{
    updateProduct(id, patch)
    setEditing(null)
  },[updateProduct])

  return (
    <div>
      <div className="header-row">
        <h2>Dashboard</h2>
        <div className="controls">
          <div className="badge">Total: {total}</div>
        </div>
      </div>

      <div className="dashboard-layout">
        <div>
          <div className="dashboard-grid">
            {products.map(p=>(
              <div key={p.id} className="card" style={{minHeight:140}}>
                <div className="card-content" style={{flexDirection:'row', gap:12}}>
                  <img src={p.image} alt={p.title} style={{width:80,height:80,objectFit:'contain'}} />
                  <div>
                    <div className="product-title" title={p.title}>{p.title}</div>
                    <div style={{color:'var(--muted)'}}>Rp {Math.round(p.price*16000).toLocaleString()}</div>
                  </div>
                </div>
                <div className="card-footer" style={{gap:8}}>
                  <button className="ghost" onClick={()=>setEditing(p)}>Edit</button>
                  <button className="button" onClick={()=>removeProduct(p.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="form-container">
          <h3 style={{ marginTop: 0 }}>{editing ? 'Edit Product' : 'Add Product'}</h3>
          <ProductForm initial={editing || undefined} onSubmit={(payload)=> {
            if (editing) onUpdate(editing.id, payload as Partial<Product>)
            else onAdd(payload)
          }} />
          {editing && <button className="ghost" style={{width: '100%', marginTop: 8, textAlign: 'center'}} onClick={()=>setEditing(null)}>Cancel Edit</button>}
        </div>
      </div>
    </div>
  )
}
