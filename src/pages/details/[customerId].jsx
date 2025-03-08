import React, { useEffect, useState } from "react";
import CustomerDetailPage from "../../templates/CustomerDetailPage";
import { useRouter } from "next/router";

const DetailPage = () => {
  const [data, setData] = useState(null);
  const router = useRouter();

  const {
    query: { customerId: id },
    isReady,
  } = router;

  const dataFetcher = async () => {
    if(isReady) {

        await fetch(`/api/customer/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  };

  useEffect(() => {
    dataFetcher();
  }, [isReady]);

  if (data) return <CustomerDetailPage data={data}  />
  // <CustomerDetailPage />
};

export default DetailPage;
