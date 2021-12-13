const convertHexToNumber = (hex_str) => {
    const numberRepresentation = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'A': 10,
        'B': 11,
        'C': 12,
        'D': 13,
        'E': 14,
        'F': 15,
    }
    let resultNumber;
    hex_str = hex_str.substring(2, hex_str.length);

    for (let i = 0; i < hex_str.length; i++) {
        const calculatedNum = numberRepresentation[hex_str[i]] * 16 ** (Math.abs(i + 1 - hex_str.length));
        resultNumber ? resultNumber += calculatedNum : resultNumber = calculatedNum;
    }
    return resultNumber;
}


console.log(convertHexToNumber('0x266262'));