import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import EditCustomerPage from "../../templates/EditCustomerPage";

const EditPage = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const {
    query:{customerId: id},
    isReady
  } = router;

  const dataFetcher = async () => {
    
    if (isReady) {
      await fetch(`/api/customer/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));

    }
  };

  useEffect(() => {
    dataFetcher();
  }, [isReady]);
  if (data) return <EditCustomerPage data={data} id={id} />;

  return <div className="text-center my-4">oops | nothing found</div>;
};

export default EditPage;
