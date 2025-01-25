"use client";  

export default function AddToCartButton({ productId }: { productId: string }) {
  const handleClick = () => {
    window.location.href = `/product/${productId}`;
  };

  return (
    <button 
      onClick={handleClick}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
    >
      Add to Cart
    </button>
  );
}
