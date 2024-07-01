export function getTodayFormated(soloYear = false) {

    let date = new Date(Date.now());

    if (soloYear) return date.getFullYear();

    const h = date.getHours();

    date = (h < 6) ? new Date(date.setDate(date.getDate() - 1)) : date;

    let d = date.getDate();
    const dd = d < 10 ? "0" + d : d;

    let m = date.getMonth() + 1;
    const mm = m < 10 ? "0" + m : m;

    const yyyy = date.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
}