const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export const callApi = async (method, fallbackData, ...args) => {
    if (!apiDomain) {
        return fallbackData;
    }

    try {
        const res = await method(...args);
        return res.data;
    } catch (e) {
        console.error(e)
    }
}
