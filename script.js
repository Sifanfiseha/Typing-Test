const word = [
  "abandon",
  "beacon",
  "candy",
  "dove",
  "eagle",
  "flame",
  "grape",
  "happy",
  "ice",
  "jungle",
  "kingdom",
  "lunar",
  "mango",
  "noble",
  "ocean",
  "petal",
  "quest",
  "river",
  "shadow",
  "train",
  "umbrella",
  "vivid",
  "whale",
  "basket",
  "yellow",
  "zebra",
  "angel",
  "brave",
  "crane",
  "dusk",
  "enigma",
  "frost",
  "glow",
  "honey",
  "index",
  "juice",
  "knight",
  "lunar",
  "magic",
  "night",
  "oasis",
  "pearl",
  "quill",
  "rose",
  "scent",
  "tiger",
  "unity",
  "vortex",
  "wind",
  "xray",
  "yogurt",
  "zoned",
  "atlas",
  "bliss",
  "cider",
  "dawn",
  "epoch",
  "flame",
  "gauge",
  "heaven",
  "irony",
  "jolly",
  "koala",
  "lamb",
  "mint",
  "neon",
  "opal",
  "plum",
  "quartz",
  "ruby",
  "sunset",
  "tango",
  "urban",
  "vogue",
  "wave",
  "xerox",
  "yearn",
  "zephyr",
  "aqua",
  "bold",
  "crisp",
  "dove",
  "edge",
  "forge",
  "grace",
  "hush",
  "ink",
  "jade",
  "kite",
  "leaf",
  "mist",
  "navy",
  "oak",
  "pale",
  "quilted",
  "rare",
  "stone",
  "tone",
  "urban",
  "vibes",
  "wisp",
  "yacht",
  "zeal",
  "arc",
  "blaze",
  "core",
  "dust",
  "echo",
  "flint",
  "gaze",
  "halo",
  "iron",
  "june",
  "kale",
  "lime",
  "moss",
  "nest",
  "ore",
  "peach",
  "quail",
  "ridge",
  "snow",
  "tide",
  "use",
  "vow",
  "window",
  "xmas",
  "yoga",
  "zoo",
  "amber",
  "breeze",
  "clover",
  "drift",
  "enjoy",
  "flame",
  "grin",
  "hatch",
  "icicle",
  "jazz",
  "knack",
  "latch",
  "mocha",
  "nail",
  "open",
  "pale",
  "quiz",
  "rust",
  "sail",
  "tide",
  "ugly",
  "vowed",
  "wool",
  "xenon",
  "yawned",
  "zone",
  "awe",
  "belt",
  "charm",
  "dome",
  "elixir",
  "fawn",
  "gala",
  "hop",
  "inc",
  "june",
  "knot",
  "lump",
  "moon",
  "noon",
  "opal",
  "pier",
  "quiver",
  "ride",
  "stare",
  "twin",
  "unit",
  "vase",
  "wax",
  "yolk",
  "zoom",
  "arrow",
  "brick",
  "cloud",
  "dune",
  "eagle",
  "frost",
  "grip",
  "haze",
  "ignite",
  "jacket",
  "lure",
  "mesh",
  "nest",
  "ogre",
  "puff",
  "quilt",
  "rave",
  "swoop",
  "track",
  "urge",
  "view",
  "windy",
  "yell",
  "zen",
  "bolt",
  "clip",
  "deep",
  "echo",
  "flare",
  "gaze",
  "heron",
  "iris",
  "jolt",
  "key",
  "lily",
  "mint",
  "nook",
  "olive",
  "plow",
  "quill",
  "rust",
  "sage",
  "tick",
  "uniform",
  "vibe",
  "whip",
  "yarn",
  "zoomed",
  "art",
  "blow",
  "core",
  "dove",
  "eagle",
  "foam",
  "gloom",
  "hand",
  "ice",
  "joke",
  "knee",
  "loaf",
  "melt",
  "note",
  "open",
  "pale",
  "quill",
  "roar",
  "slug",
  "tear",
  "urge",
  "blank",
  "wait",
  "yawn",
  "zinc",
];
const textContainer = document.getElementById("text-container");
const timer = document.getElementById("timer");
const tryAgeain = document.getElementById("try-again");
const finalScore = document.getElementById("final-score");
let errors = 0;
let longText = GenerateLongText();
textContainer.innerHTML = longText;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
1;
function GenerateLongText() {
  const shuffledWords = shuffleArray([...word]);
  return shuffledWords.join(" ");
}
let totalTyped = "";
let currentCharIndex = 0;
document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    if (totalTyped.length > 0) {
      totalTyped = totalTyped.slice(0, -1);
      currentCharIndex = Math.max(currentCharIndex - 1, 0);
    }
  } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
    totalTyped += e.key;
    currentCharIndex++;
  }
  const textArray = longText.split("");

  textContainer.innerText = "";
  for (let i = 0; i < textArray.length; i++) {
    const span = document.createElement("span");
    if (i < totalTyped.length) {
      if (totalTyped[i] === textArray[i]) {
        span.classList.add("correct");
      } else {
        span.classList.add("error");
        errors++;
      }
    }
    span.textContent = textArray[i];
    textContainer.append(span);
  }
  // scroll container
  if (totalTyped.length > 20) {
    const charWidth = 14; // Approximate width of each character in pixels
    const maxVisibleChars = 20; // Maximum number of characters visible without scrolling
    const scrollAmount = (totalTyped.length - maxVisibleChars) * charWidth;

    if (textContainer) {
      // Ensure textContainer exists
      textContainer.scrollLeft = scrollAmount;
    }
  }
});
console.log("we are venom!");
