export function calculateReadTime(text) {
    const wordCount = text.split(" ").length;
    return Math.round(wordCount / 100 * 0.3);
}

export default calculateReadTime;

