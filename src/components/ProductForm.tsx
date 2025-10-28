import React, { useState, useEffect } from 'react'
import { Product } from '../types'

export default function ProductForm({initial, onSubmit}:{ initial?:Partial<Product>, onSubmit:(p:Omit<Product,'id'>)=>void }){
  const [title,setTitle] = useState(initial?.title||'')
  const [price,setPrice] = useState(initial?.price||0)
  const [desc,setDesc] = useState(initial?.description||'')
  const [category,setCategory] = useState(initial?.category||'general')
  const [image,setImage] = useState(initial?.image||'')

  useEffect(() => {
    // Setiap kali 'initial' berubah (saat mode edit), update state form
    setTitle(initial?.title || '');
    setPrice(initial?.price || 0);
    setDesc(initial?.description || '');
    setCategory(initial?.category || 'general');
    setImage(initial?.image || '');
  }, [initial]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const submit = (e:React.FormEvent) => {
    e.preventDefault()
    if (!title) return alert('Title required')
    onSubmit({title,price:+price,description:desc,category,image, rating:{rate:0,count:0}})
  }

  return (
    <form className="form" onSubmit={submit}>
      <label htmlFor="title">Title</label>
      <input id="title" className="input" placeholder="Product Title" value={title} onChange={e=>setTitle(e.target.value)} />

      <label htmlFor="price">Price</label>
      <input id="price" className="input" placeholder="Product Price" value={price} onChange={e=>setPrice(Number(e.target.value))} type="number" />

      <label htmlFor="category">Category</label>
      <input id="category" className="input" placeholder="Product Category" value={category} onChange={e=>setCategory(e.target.value)} />

      <label htmlFor="image">Image URL</label>
      <input id="image" className="input" placeholder="https://example.com/image.jpg" value={image} onChange={e => setImage(e.target.value)} />
      
      <label htmlFor="image-file">Or Upload File</label>
      <input id="image-file" className="input" type="file" accept="image/*" onChange={handleFileChange} />
      {image && <img src={image} alt="Preview" style={{width: '100px', height: '100px', objectFit: 'contain', marginTop: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}} />}

      <label htmlFor="description">Description</label>
      <textarea id="description" className="input" placeholder="Product Description" value={desc} onChange={e=>setDesc(e.target.value)} />

      <div style={{display:'flex',gap:8}}>
        <button className="button" type="submit" style={{width: '100%'}}>Save</button>
      </div>
    </form>
  )
}
