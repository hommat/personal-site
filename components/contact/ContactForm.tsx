import { ChangeEvent, FormEvent, useState } from 'react';

interface ContactFormValues {
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [isLoading, setLoading] = useState(false);
  const [values, setValues] = useState<ContactFormValues>({
    email: '',
    subject: '',
    message: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isLoading) return;

    setLoading(true);

    setTimeout(() => setLoading(false), 500);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        onChange={handleChange}
        value={values.email}
        placeholder="example@mail.com"
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        spellCheck="false"
        required
      />
      <label htmlFor="subject">Subject</label>
      <input
        onChange={handleChange}
        value={values.subject}
        placeholder="Job offer"
        type="text"
        id="subject"
        name="subject"
        autoComplete="off"
        required
      />
      <label htmlFor="message">Message</label>
      <textarea
        onChange={handleChange}
        value={values.message}
        placeholder="Hey, check out our offer!"
        name="message"
        id="message"
        autoComplete="off"
        required
      ></textarea>
      <button type="submit" disabled={isLoading}>
        Send
      </button>
    </form>
  );
}
