let verse = document.getElementById("generatedVerse");
let verseTitle = document.getElementById("generatedTitle");

// Define the books array
const books = {
  "genesis": 50, "exodus": 40, "leviticus": 27, "numbers": 36, "deuteronomy": 34,
  "joshua": 24, "judges": 21, "ruth": 4, "ezra": 10, "job": 42, "psalms": 150, 
  "proverbs": 31, "isaiah": 66, "jeremiah": 52, "lamentations": 5, "ezekiel": 48, 
  "daniel": 12, "hosea": 14, "joel": 3, "amos": 9, "obadiah": 1, "jonah": 4, 
  "micah": 7, "nahum": 3, "habakkuk": 3, "zephaniah": 3, "haggai": 2, "malachi": 4, 
  "matthew": 28, "mark": 16, "luke": 24, "john": 21, "acts": 28, "romans": 16
};

// Get a random book name from the keys of the books object
const bookNames = Object.keys(books);
const randomBookName = bookNames[Math.floor(Math.random() * bookNames.length)];
console.log("Random Book:", randomBookName);

// Get the number of chapters in the selected book
const maxChapters = books[randomBookName];

// Get a random chapter and verse
const randomChapter = Math.floor(Math.random() * maxChapters) + 1;
const randomVerse = Math.floor(Math.random() * 10) + 1; // Assuming max verses per chapter are 30

console.log("Random Chapter:", randomChapter);
console.log("Random Verse:", randomVerse);

// Fetch the random verse from the API
fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/${encodeURI(randomBookName)}/chapters/${randomChapter}/verses/${randomVerse}.json`)
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    console.log(data);  // Log the data to see the result
    if (data.text) {
      verseTitle.innerText = `${randomBookName} ${randomChapter}:${randomVerse}`;
      verse.innerText = `"${data.text}" - ${randomBookName} ${randomChapter}:${randomVerse}`;
    }
  })
  .catch(error => {
    verseTitle.innerText = `Genesis 1:1`;
      verse.innerText = `"In the beginning God created the heavens and the earth. - Genesis 1:1`;
    console.error('Error fetching the data:', error);
  });

