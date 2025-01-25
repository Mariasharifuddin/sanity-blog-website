import { client } from '@/sanity/lib/client';
import Image from 'next/image';

export default async function ProductPage({ params }: { params: { id: string } }) {
  
  const product = await client.fetch(
    `
    *[_type == 'products' && _id == $id][0]{
      _id,
      title,
      description,
      "imageUrl": image.asset->url
    }
  `,
    { id: params.id }  );

  
  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

      <div className="relative w-full  mt-4 h-[350px]">
        <Image 
          src={product.imageUrl} 
          alt={product.title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg"
        />
      </div>

      <p className="mt-4 text-gray-600">{product.description}</p>
      
      <button 
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
