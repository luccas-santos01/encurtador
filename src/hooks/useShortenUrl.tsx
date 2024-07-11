import { useState } from 'react';
import Swal from 'sweetalert2';

const useShortenUrl = () => {
    const [shortUrl, setShortUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const validateUrl = (url: string) => {
        if (!url) {
            Swal.fire({
                icon: 'error',
                title: 'URL não pode ser vazia',
                showConfirmButton: false,
                timer: 1000
            });
        }
        return url;
    };

    const shortenUrl = async (url: string) => {
        const validUrl = validateUrl(url);
        if (!validUrl) return;

        setLoading(true);
        setError(null);

        const headers = {
            "Content-Type": "application/json",
            "Accept":"application/json",
            "x-api-key": "sk_bf2bb628c42f45c28c432b3a2737d5d4"
        };

        const linkRequest = {
            url: validUrl,
            expiry: "5m",
        };

        try {
            const response = await fetch("https://api.manyapis.com/v1-create-short-url", {
                method: "POST",
                body: JSON.stringify(linkRequest),
                headers: headers
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await response.json();
            setShortUrl(json.shortUrl);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Ocorreu um erro desconhecido");
            }
        } finally {
            setLoading(false);
        }
    };

    return { shortUrl, loading, error, shortenUrl, setShortUrl };
};

export default useShortenUrl;