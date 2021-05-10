// Streak graph picture
import fs from "fs";

const commits: string[] = [
  /* columns
  '      10>|      20>|      30>|      40>|      50>|  '   < exactly 52 characters */
  '####################################################',  // Sun
  '####################################################',  // Mon
  '####################################################',  // Tue
  '####################################################',  // Wed
  '####################################################',  // Thu
  '####################################################',  // Fri
  '####################################################',  // Sat
]
//  *  for 10 commits in that day
//  #  for 20 commits in that day

// Repository origin
const repository: string = 'https://github.com/thatoranzhevyy/contribution-designer-test1.git';

console.log("Draw graph for repository: " + repository)

if (!commits) {
  console.log("There should be exactly 7 lines of 52 characters each: 7 days in a week, 52 weeks in a year.")
  process.exit(1)
}
console.log('Commit graph:', commits);


// Count the days
const todayData = new Date();
const pastData = new Date(new Date().setFullYear(new Date().getFullYear() - 1));


console.log("Current datetime:        ", todayData)
console.log("Datetime a year ago:     ", pastData)
var lastSunday = new Date(pastData.setDate(pastData.getDate() - pastData.getDay()));
console.log("Sunday of that week was: ", lastSunday)
const commitsRes = [];
const count = 7 * 52;
let date = lastSunday;

for (let day = 0, weekDay = 0; day < count; day++) {
  let week = Math.floor(day / 7);

  let char = commits[weekDay].substr(week, 1);
  if (char !== ' ') {
    var datestring = date.toISOString().substring(0, 10);
    // console.log(datestring)
    commitsRes[datestring] = char === '#' ? 20 : 10;
  }
  date = addDays(date, 1);
  weekDay = (weekDay + 1) % 7;
}

function addDays(date, days) {
  date.setDate(date.getDate() + days);
  return date;
}

let command = 'rm -rf .git\n';
command += 'git init\n';
command += 'echo "# contribution-designer" > contribution-designer.md\n';
for (const commitsResKey in commitsRes) {
  command += 'echo "\n## ' + commitsResKey + '" >> contribution-designer.md\n';
  for (let commit = 0; commit < commitsRes[commitsResKey]; commit++) {
    command += 'echo "* contribution-designer №' + (commit + 1) + '" >> contribution-designer.md\n';
    command += 'git add contribution-designer.md\n';
    command += 'git commit -m "contribution-designer №' + (commit + 1) + '" --date="' + commitsResKey + 'T12:' +
      (commit < 10 ? '0' : '') + commit + ':00+0300"\n';
    command += '\n';
  }
  command += '\n';
}
command += 'git remote add origin ' + repository + '\n';
command += 'git push -u origin master -f' + '\n';
fs.writeFile('commits/make-commits.sh', command, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});
console.log("done")
