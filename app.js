const sortable = new Sortable(document.getElementById("sections"),{
animation:150
});

function list(text){
let arr=text.split(",")
let html=""
arr.forEach(item=>{
html+="<li>"+item.trim()+"</li>"
})
return html
}

function updatePreview(){

document.getElementById("rname").innerText=
document.getElementById("name").value

document.getElementById("rprofession").innerText=
document.getElementById("profession").value

document.getElementById("rcontact").innerText=
document.getElementById("email").value+" | "+
document.getElementById("phone").value+" | "+
document.getElementById("location").value

document.getElementById("rsummary").innerText=
document.getElementById("summary").value

document.getElementById("rskills").innerHTML=
list(document.getElementById("skills").value)

document.getElementById("rprojects").innerHTML=
list(document.getElementById("projects").value)

document.getElementById("rexperience").innerHTML=
list(document.getElementById("experience").value)

document.getElementById("reducation").innerText=
document.getElementById("education").value

document.getElementById("rlanguages").innerHTML=
list(document.getElementById("languages").value)

document.getElementById("rref1").innerText=
document.getElementById("ref1name").value+" - "+
document.getElementById("ref1contact").value

document.getElementById("rref2").innerText=
document.getElementById("ref2name").value+" - "+
document.getElementById("ref2contact").value

const photo=document.getElementById("photo").files[0]

if(photo){
document.getElementById("rphoto").src=
URL.createObjectURL(photo)
}

calculateScore()

}

document.querySelectorAll("input,textarea").forEach(el=>{
el.addEventListener("input",updatePreview)
})

function generateSummary(){

let skills=document.getElementById("skills").value

let text="Motivated professional skilled in "+skills+
" with strong problem solving ability and commitment to delivering high quality results."

document.getElementById("summary").value=text

updatePreview()
}

function generateProjectBullets(){

let projects=document.getElementById("projects").value.split(",")

let html=""

projects.forEach(p=>{
html+="Developed "+p.trim()+" using modern technologies,"
})

document.getElementById("projects").value=html

updatePreview()
}

function generateExperienceBullets(){

let level=document.getElementById("level").value

let exp=document.getElementById("experience").value.split(",")

let html=""

exp.forEach(e=>{
if(level=="fresher"){
html+="Completed internship involving "+e.trim()+","
}else{
html+="Responsible for "+e.trim()+" while improving performance,"
}
})

document.getElementById("experience").value=html

updatePreview()
}

function calculateScore(){

let fields=[
"name","profession","email",
"skills","projects","education","summary"
]

let filled=0

fields.forEach(id=>{
if(document.getElementById(id).value!=""){
filled++
}
})

let score=Math.floor((filled/fields.length)*100)

document.getElementById("score").innerText=score+"%"
}

function updateTemplate(){

let template=document.getElementById("template").value

let preview=document.getElementById("resumePreview")

preview.className=""

preview.classList.add(template)
}

function downloadResume(){

const element=document.getElementById("resumePreview")

html2pdf().set({
html2canvas:{useCORS:true}
}).from(element).save("resume.pdf")
}

function analyzeResume(){

let tips=[]

if(document.getElementById("summary").value==""){
tips.push("Add a professional summary")
}

if(document.getElementById("skills").value.split(",").length<3){
tips.push("Add more skills")
}

if(document.getElementById("projects").value==""){
tips.push("Add at least one project")
}

if(document.getElementById("languages").value==""){
tips.push("Add languages known")
}

if(tips.length==0){
tips.push("Your resume looks strong!")
}

let html=""

tips.forEach(t=>{
html+="• "+t+"<br>"
})

document.getElementById("analysis").innerHTML=html
}
