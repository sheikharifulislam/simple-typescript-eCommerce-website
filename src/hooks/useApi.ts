import { useEffect, useState } from "react";

type StatusTypes = "idle" | "Pending" | "success" | "error";

const useApi = <T>(service: () => Promise<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<StatusTypes>("idle");

    useEffect(() => {
        setStatus("Pending");
        setError(null);

        service()
            .then((data) => {
                setData(data);
                setError(null);
                setStatus("success");
            })
            .catch((error) => {
                setError(error.message);
                setStatus("error");
            });
    }, [service]);
    return {
        data,
        isLoading: status === "Pending",
        isSuccess: status === "success",
        error,
    };
};

export default useApi;
