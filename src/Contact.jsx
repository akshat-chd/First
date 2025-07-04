 const handleSubmit = () => {
    const name = document.getElementById("formInput1").value;
    const email = document.getElementById("formInput2").value;
    const message = document.getElementById("formInput3").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);

    alert("Data saved to localStorage!");
      document.getElementById("formInput1").value='';
  document.getElementById("formInput2").value='';
     document.getElementById("formInput3").value='';
  };
function Contact() {
  return (
    <section id="contact" className="py-5 bg-light text">
      <div className="container">
        <h2>Contact Me</h2>
       
            <div class="mb-3">
  <label for="formInput1" class="form-label">Your Name</label>
  <input type="text" class="form-control" id="formInput1" placeholder="Name"></input>
</div>
<div class="mb-3">
  <label for="formInput2" class="form-label">Your Email</label>
  <input type="text" class="form-control" id="formInput2" placeholder="a@gmail.com"></input>
</div>
<div class="mb-3">
  <label for="formInput3" class="form-label">Your Message</label>
  <input type="text" class="form-control" id="formInput3" placeholder="Write your message here"></input>
</div>
<input type='submit' id='three' onClick={handleSubmit}></input>


   
      </div>
    </section>
    
    

  );
}
export default Contact