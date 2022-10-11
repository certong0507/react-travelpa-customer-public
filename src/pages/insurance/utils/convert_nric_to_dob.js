export const convertNricToDob = (nric) => {
    const checkValidNricRegex = /^(\d{2})(\d{2})(\d{2})-?\d{2}-?\d{4}$/;
    
    if (nric.match(checkValidNricRegex)) {
        let year = ( checkValidNricRegex.exec(nric) || [] )[1] || "";
        let month = ( checkValidNricRegex.exec(nric) || [] )[2] || "";
        let day = ( checkValidNricRegex.exec(nric) || [] )[3] || "";

        const now = new Date().getFullYear().toString();

        const decade = now.substring(0, 2);
        if (now.substring(2,4) >= year) {
            year = parseInt(decade.concat(year.toString()), 10);
        }

        const date = new Date(year, (month - 1), day, 0, 0, 0, 0);
        return date;
    }
}
