const url=window.location.href;
const urlParams=new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");
async function getDonor() {
    const res=await fetch(`http://localhost:3000/api/getdonor/${id}`)
    const donor=await res.json();
    document.getElementById("frm").innerHTML=`
    <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="${donor.name}">

            <label for="age">Age:</label>
            <input type="number" id="age" name="age" value="${donor.age}">

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value="${donor.dob}">

            <label for="place">Place:</label>
            <input type="text" id="place" name="place" value="${donor.place}">

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" value="${donor.phone}">

            <label for="blood_group">Blood Group:</label>
            <select id="blood_group" name="blood_group" value="${donor.blood_group}">
                <option value="${donor.blood_group}">${donor.blood_group}</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>

            <div class="buttons">
                <button >Submit</button>
                <button type="reset">Reset</button>
            </div>
    `
}
getDonor()

document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    try {
        const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const dob=document.getElementById("dob").value;
    const place=document.getElementById("place").value;
    const phone=document.getElementById("phone").value;
    const blood_group=document.getElementById("blood_group").value;
    console.log(name,age,dob,place,phone,blood_group);
    const res=await fetch(`http://localhost:3000/api/editdonor/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,age,dob,place,phone,blood_group})
    })
    if(res.status==201){
        alert("Updated")
        window.location.href="../index.html"
    }else{
        alert("error")
    }
    } catch (error) {
        console.log(error);
        
    }
})