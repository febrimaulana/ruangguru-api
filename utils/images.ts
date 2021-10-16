const NODE_ENV = process.env.NODE_ENV;

export const imageUrl = (image: string) => {
    return NODE_ENV == "development" ? `https://d24yrj16q275jn.cloudfront.net/${image}` : `https://d24yrj16q275jn.cloudfront.net/${image}`
}

export const imageName = (url: string) => {
    const splitUrl = url.split('/');
    return splitUrl.slice(-1)[0]
}

export const getTypeImage = (base64: string) => {
    try {
        const baseType: string = base64.split(":")[1];
        const fileType: string = baseType.split(';')[0];
        const type = fileType.split('/')[1];

        return {
            fileType: fileType,
            type: type
        }
    } catch (e: any) {
        return "error"
    }
}