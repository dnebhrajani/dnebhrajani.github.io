function analyzeText() {
    const text = document.getElementById("longText").value.toLowerCase();
    const tbody = document.querySelector("#analysisOutput tbody");
    tbody.innerHTML = "";
  
    // Base counts
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
  
    // Add base data
    data.forEach(([label, value]) => {
      const row = `<tr><td>${label}</td><td>${value}</td></tr>`;
      tbody.innerHTML += row;
    });
  
    // Tokenization
    const words = text.match(/\b\w+\b/g) || [];
  
    // Pronouns list (not exhaustive)
    const pronouns = [
      "i", "you", "he", "she", "it", "we", "they",
      "me", "him", "her", "us", "them",
      "my", "your", "his", "her", "its", "our", "their",
      "mine", "yours", "hers", "ours", "theirs"
    ];
  
    // Prepositions (common list)
    const prepositions = [
      "in", "on", "at", "by", "for", "with", "about", "against",
      "between", "into", "through", "during", "before", "after",
      "above", "below", "to", "from", "up", "down", "off", "over", "under"
    ];
  
    // Indefinite articles
    const articles = ["a", "an"];
  
    // Count helper
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
  
    // Display grouped results
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
  