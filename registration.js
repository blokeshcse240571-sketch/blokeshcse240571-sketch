document.getElementById("registrationForm").addEventListener("submit", function(event){

    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const fatherName = document.getElementById("fatherName").value.trim();
    const motherName = document.getElementById("motherName").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const education = document.getElementById("education").value;
    const photo = document.getElementById("photo").files.length;
    const signature = document.getElementById("signature").files.length;

    if(
        firstName === "" ||
        lastName === "" ||
        fatherName === "" ||
        motherName === "" ||
        dob === "" ||
        gender === "" ||
        education === "" ||
        photo === 0 ||
        signature === 0
    ){
        alert("Please fill all the fields.");
        return;
    }

    alert("Registration submitted successfully!");

    document.getElementById("registrationForm").reset();
});
