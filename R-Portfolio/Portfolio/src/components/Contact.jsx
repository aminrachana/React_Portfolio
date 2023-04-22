import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="topic" class="h2-name">Contact</h2>
      <form className='card'>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email ID</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>

          <label for="exampleFormControlInput1 mt-4">Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter name"/>

          <label for="exampleFormControlInput1 mt-4">Purpose</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Please say your purpose"/>

          <button className='mt-4'>Connect</button>
        </div>
      </form>
    </section>
  )
}

export default Contact
