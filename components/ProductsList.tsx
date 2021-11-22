import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

const ProductsList = () => {
  const [products, setProducts] = useState<>([]);
  useEffect(() => {
    const collectionRef = collection(db, "products");
    const q = query(collectionRef, orderBy("title"));

    const unsubscripe = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsubscripe;
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default ProductsList;
