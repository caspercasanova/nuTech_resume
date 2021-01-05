import React from 'react';

export default function ContactForm() {
  return (
    <section>
      <form>
        <input placeholder="Email" type="email" />
        <input placeholder="Name" type="text" />
        <input placeholder="Company" type="text" />
        <input placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
