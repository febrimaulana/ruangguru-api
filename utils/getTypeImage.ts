const getTypeImage = (base64: string) => {
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

export default getTypeImage