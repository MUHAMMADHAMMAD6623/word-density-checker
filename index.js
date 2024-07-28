document.getElementById('input').addEventListener('input', function() {
    const inputelement = document.querySelector('#input');
    const densitycontainer = document.querySelector('.density');
    const inputText = inputelement.value.trim();
    const cleanedText = inputText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ').replace(/\s{2,}/g, ' ');
    const words = cleanedText.split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    const wordFrequency = {};
    words.forEach(word => {
        word = word.toLowerCase();
        if (wordFrequency[word]) {
            wordFrequency[word]++;
        } else {
            wordFrequency[word] = 1;
        }
    });
    let densityText = `Word Count: ${wordCount}\n\nWord Density:\n`;
    for (const [word, frequency] of Object.entries(wordFrequency)) {
        const densityPercentage = ((frequency / wordCount) * 100).toFixed(2);
        densityText += `${word}: ${densityPercentage}%\n`;
    }
    densitycontainer.innerText = densityText;
});
