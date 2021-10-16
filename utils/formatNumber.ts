import numbro from 'numbro';

const formattedNumber = (number: number | string) => {
    let formattedNumber = numbro(number).format({
        thousandSeparated: true,
    });
    return formattedNumber
}

export default formattedNumber