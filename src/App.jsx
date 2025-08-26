import React, { useState } from 'react';
import { Car } from 'lucide-react';
const cars = [{id:1,name:'Tesla Model S',price:'$89,990',image:'/assets/tesla.jpg',category:'Electric'}];
export default function App() {
  const [currentView,setCurrentView] = useState('home');
  return <div className="min-h-screen"><nav className="p-4 bg-white shadow"><Car className="inline-block"/> CarRoom</nav></div>;
}