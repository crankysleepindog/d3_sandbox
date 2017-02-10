var array = [ { AskReddit: 15652682, id: 0 },
  { The_Donald: 364364, id: 1 },
  { politics: 3293964, id: 2 },
  { funny: 15496275, id: 3 },
  { pics: 15268808, id: 4 },
  { nba: 520433, id: 5 },
  { todayilearned: 15486087, id: 6 },
  { worldnews: 15298316, id: 7 },
  { news: 12766077, id: 8 },
  { gifs: 12716418, id: 9 },
  { aww: 13699447, id: 10 },
  { videos: 14580189, id: 11 },
  { Overwatch: 768722, id: 12 },
  { gaming: 14612167, id: 13 },
  { BlackPeopleTwitter: 846849, id: 14 },
  { movies: 14287095, id: 15 },
  { nfl: 575523, id: 16 },
  { leagueoflegends: 952540, id: 17 },
  { Showerthoughts: 10698955, id: 18 },
  { AdviceAnimals: 4148824, id: 19 },
  { soccer: 571007, id: 20 },
  { relationships: 604301, id: 21 },
  { mildlyinteresting: 10810566, id: 22 },
  { SquaredCircle: 181034, id: 23 },
  { me_irl: 504820, id: 24 },
  { Jokes: 10447440, id: 25 },
  { GlobalOffensive: 465834, id: 26 },
  { dankmemes: 202216, id: 27 },
  { pcmasterrace: 761664, id: 28 },
  { wholesomememes: 372882, id: 29 },
  { tifu: 10467556, id: 30 },
  { hiphopheads: 476167, id: 31 },
  { IAmA: 15117226, id: 32 },
  { LifeProTips: 11159249, id: 33 },
  { DotA2: 324597, id: 34 },
  { anime: 461882, id: 35 },
  { hockey: 313609, id: 36 },
  { television: 11507348, id: 37 },
  { nottheonion: 10304083, id: 38 },
  { WTF: 4733004, id: 39 },
  { conspiracy: 429213, id: 40 },
  { Rainbow6: 104739, id: 41 },
  { EnoughTrumpSpam: 73888, id: 42 },
  { europe: 1237818, id: 43 },
  { interestingasfuck: 902420, id: 44 },
  { dataisbeautiful: 10234035, id: 45 },
  { rupaulsdragrace: 61223, id: 46 },
  { NintendoSwitch: 98799, id: 47 },
  { technology: 5166173, id: 48 },
  { '4chan': 771176, id: 49 },
  { TumblrInAction: 343057, id: 50 },
  { canada: 243637, id: 51 },
  { MMA: 246057, id: 52 },
  { youtubehaiku: 319570, id: 53 },
  { hearthstone: 418895, id: 54 },
  { australia: 133092, id: 55 },
  { PrequelMemes: 53760, id: 56 },
  { OldSchoolCool: 10035189, id: 57 },
  { forhonor: 31284, id: 58 },
  { SubredditDrama: 253791, id: 59 },
  { CFB: 237612, id: 60 },
  { CringeAnarchy: 173957, id: 61 },
  { Games: 776812, id: 62 },
  { StarWars: 562891, id: 63 },
  { '2007scape': 102015, id: 64 },
  { DestinyTheGame: 302795, id: 65 },
  { food: 10320609, id: 66 },
  { unitedkingdom: 151472, id: 67 },
  { explainlikeimfive: 12565021, id: 68 },
  { KotakuInAction: 76387, id: 69 },
  { wow: 378661, id: 70 },
  { books: 11680122, id: 71 },
  { trashy: 277696, id: 72 },
  { space: 10675774, id: 73 },
  { TrollXChromosomes: 209440, id: 74 },
  { IASIP: 162175, id: 75 },
  { trees: 917788, id: 76 },
  { Futurology: 10261322, id: 77 },
  { de: 51111, id: 78 },
  { baseball: 372564, id: 79 },
  { UpliftingNews: 10145874, id: 80 },
  { photoshopbattles: 10290031, id: 81 },
  { legaladvice: 181509, id: 82 },
  { RocketLeague: 272311, id: 83 },
  { bestof: 4688873, id: 84 },
  { Music: 13870796, id: 85 },
  { personalfinance: 10233418, id: 86 },
  { Art: 9885691, id: 87 },
  { meirl: 181097, id: 88 },
  { xboxone: 323485, id: 89 },
  { FireEmblemHeroes: 32373, id: 90 },
  { PoliticalDiscussion: 124107, id: 91 },
  { Tinder: 304396, id: 92 },
  { atheism: 2015099, id: 93 },
  { GetMotivated: 10197729, id: 94 },
  { streetwear: 185607, id: 95 },
  { sports: 10495513, id: 96 },
  { Android: 731734, id: 97 },
  { DIY: 10707616, id: 98 },
  { ukpolitics: 70148, id: 99 } ]

for (var i = 0; i < array.length; i++) {
  var sub = array[i];

}

var makeChildren = function(root, array, graph, depth) {
  console.log('wat')
  if(!array.length) { 
    console.log(graph)
    return graph; 
  }
  graph = graph || [];
  depth = depth || 1;
  var children = [];
  for (var i = 0; i < 5; i++) {
    if (!array.length) {
      console.log(graph)
      return graph;
    }
    var child = array.shift();
    children.push(child);
    graph.push({
      source: root.id,
      target: child.id,
      weight: 1  
    })
  }

  if (depth < 4) {
    children.forEach(function(child) {
      makeChildren(child, array, graph, depth + 1);
    })
  }
}

var root = array.shift()
var graph = makeChildren(root, array)

console.log(graph)