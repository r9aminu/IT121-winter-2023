var grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";
let grade_list = grades.split(", ").sort()
// document.write(grade_list);

for (let sorted of grade_list) {

  let name_only = sorted.substring(0, sorted.indexOf("|"));
  let name_uppercase = name_only.charAt(0).toUpperCase() + name_only.slice(1);

  let grade_only = sorted.substring(sorted.indexOf("|") + 1);

  let name_and_grade = name_uppercase + " - " + grade_only;

  document.write(name_and_grade + "<br>");
  document.write("<br>");
}

let num_list = []
for (let name of grade_list) {
  let nums = name.substring(name.indexOf("|") + 1);
  num_list.push(parseInt(nums));
}
document.write(num_list.sort() + "<br>");
document.write("lowest grade: " + num_list[0] + "<br>")
document.write("highest grade: " + num_list[num_list.length - 1] + "<br>")
document.write("number of students: " + num_list.length + "<br>");

let total = 0
for (let num in num_list) {
  total += num_list[num]
}
document.write("average grade: " + total / num_list.length);












