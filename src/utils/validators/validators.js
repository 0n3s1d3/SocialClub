export const requiredPost = (value) => {
    if (value) return undefined;
    return 'Вы оставили поле пустым'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Длина не должна превышать ${maxLength} символов`;
    return undefined
}