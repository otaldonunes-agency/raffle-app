export const getFormattedDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    }
    
    const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(date);

    return formattedDate;
};

export const getISODate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        fractionalSecondDigits: 3,
    }

    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(date);

    const partValues = parts.reduce((acc, part) => {
        acc[part.type] = part.value;
        return acc;
    }, {} as Record<string, string>);

    const isoDate = `${partValues.year}-${partValues.month}-${partValues.day}T${partValues.hour}:${partValues.minute}:${partValues.second}.${partValues.fractionalSecond}Z`;

    return isoDate;
}
