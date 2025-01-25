import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import AddToCartButton from './component/AddToCartButton';  // Add this import

export const revalidate = 0; 

export default async function Home() {
  const fetchData = await client.fetch(`
    *[_type == 'products']{
      _id,
      title,
      description,
      "imageUrl": image.asset->url
    }
  `);

  console.log("Fetched Data:", fetchData); 

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {fetchData.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fetchData.map((product: any) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105 duration-300"
            >
              <div className="relative w-full h-[350px]">
  <Image
    src={product.imageUrl}
    alt={product.title}
    fill  
    style={{ objectFit: 'cover' }}  
    className="rounded-t-lg"
  />
</div>

              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-600">{product.description}</p>

                
                <AddToCartButton productId={product._id} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found</p>
      )}
    </div>
  );
}
