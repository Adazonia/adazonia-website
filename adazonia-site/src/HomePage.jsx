import React, { useState } from "react";

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Mesajınız başarıyla gönderildi.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      setStatus('Bağlantı hatası.');
    }
  };

  return (
    <main>
      <h1>Adazonia Test Yayın</h1>
    </main>
  );
}
