import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {

        if (!currency) return;

        const fetchCurrencyInfo = async () => {
            try {

                const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                );

                const result = await response.json();

                setData(result[currency]);

            } catch (error) {
                console.log("Error fetching currency data:", error);
            }
        };

        fetchCurrencyInfo();

    }, [currency]);

    return data;
}

export default useCurrencyInfo;