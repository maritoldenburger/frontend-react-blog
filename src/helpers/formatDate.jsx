function formatDate(dateString){
    const date = new Date(dateString);
    return date.toLocaleDateString("nl-NL", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export default formatDate;