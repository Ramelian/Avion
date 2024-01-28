import styles from "../style";
import { useMemo } from "react";
import ProductCard from "./ProductCard";
import { useGetItemsQuery } from "../features/api";
import SkeletonCard from "./SkeletonCard";

const Recommendations = () => {
  const { data, isLoading } = useGetItemsQuery();

  const derivedData = useMemo(() => {
    return data && data.slice(0, 4);
  }, [data]);

  return (
    <div className={`${styles.boxWidth} flex flex-col items-center py-10`}>
      <h2 className="text-3xl self-start md:text-2xl my-8">
        You might also like
      </h2>
      <ul
        className={`flex gap-6 overflow-x-auto w-full mb-12 md:justify-between`}
      >
        {isLoading
          ? [...Array(4)].map((e) => <SkeletonCard key={e} />)
          : derivedData.map((item, id) => {
              return <ProductCard key={id} item={item} />;
            })}
      </ul>
      <button className={`${styles.button} ${styles.secondary}`}>
        View Collection
      </button>
    </div>
  );
};
export default Recommendations;
