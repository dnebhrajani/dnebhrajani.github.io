function analyzeText() {
    const text = document.getElementById("longText").value.toLowerCase();
    const tbody = document.querySelector("#analysisOutput tbody");
    tbody.innerHTML = "";
  
    const letterCount = (text.match(/[a-zA-Z]/g) || []).length;
    const spaceCount = (text.match(/ /g) || []).length;
    const newlineCount = (text.match(/\n/g) || []).length;
    const specialCount = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  
    const data = [
      ["Letters", letterCount],
      ["Words", wordCount],
      ["Spaces", spaceCount],
      ["Newlines", newlineCount],
      ["Special Characters", specialCount]
    ];
  
    data.forEach(([label, value]) => {
      const row = `<tr><td>${label}</td><td>${value}</td></tr>`;
      tbody.innerHTML += row;
    });
  
    const words = text.match(/\b\w+\b/g) || [];
  
    const pronouns = [
      "i", "you", "he", "she", "it", "we", "they",
      "me", "him", "her", "us", "them",
      "my", "your", "his", "her", "its", "our", "their",
      "mine", "yours", "hers", "ours", "theirs"
    ];
  
    const prepositions = [
      "in", "on", "at", "by", "for", "with", "about", "against",
      "between", "into", "through", "during", "before", "after",
      "above", "below", "to", "from", "up", "down", "off", "over", "under"
    ];
  
    const articles = ["a", "an"];
  
    function countGroup(groupList) {
      const counts = {};
      words.forEach(word => {
        if (groupList.includes(word)) {
          counts[word] = (counts[word] || 0) + 1;
        }
      });
      return counts;
    }
  
    const pronounCounts = countGroup(pronouns);
    const prepositionCounts = countGroup(prepositions);
    const articleCounts = countGroup(articles);
  
    function appendGroupCounts(title, countsObj) {
      tbody.innerHTML += `<tr><th colspan="2">${title}</th></tr>`;
      Object.entries(countsObj).forEach(([word, count]) => {
        tbody.innerHTML += `<tr><td>${word}</td><td>${count}</td></tr>`;
      });
    }
  
    appendGroupCounts("Pronouns", pronounCounts);
    appendGroupCounts("Prepositions", prepositionCounts);
    appendGroupCounts("Indefinite Articles", articleCounts);
  }
  
  function getElementType(element) {
    if (element.tagName === 'IMG') return 'image';
    if (element.tagName === 'A') return 'cv';
    if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') return 'textbox';
    if (element.tagName === 'SELECT') return 'drop-down';
    if (element.tagName === 'BUTTON') return 'button';
    if (element.tagName.match(/^H[1-6]$/)) return 'heading';
    return element.tagName.toLowerCase();
  }
  
  window.addEventListener('load', () => {
    const timestamp = new Date().toISOString();
    console.log(` ${timestamp}, type: view, location: page`);
  });
  
  document.addEventListener('click', (e) => {
    const timestamp = new Date().toISOString();
    const type = 'click';
    const objectType = getElementType(e.target);
    console.log(`${timestamp}, type: ${type}, location: ${objectType}`);
  });
  