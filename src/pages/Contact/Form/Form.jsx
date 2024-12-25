import { useState } from "react";
import { Button } from "../../../components/Button/Button";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="w-full lg:flex-1 flex flex-col gap-3 mt-20 lg:mt-0">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        className="rounded-md outline-none dark:bg-zinc-200 bg-zinc-800 dark:text-zinc-800 text-zinc-200 p-2"
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        className="rounded-md outline-none  dark:bg-zinc-200 bg-zinc-800 dark:text-zinc-800  text-zinc-200 p-2"
        onChange={handleChange}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        className="outline-none rounded-md dark:bg-zinc-200 bg-zinc-800 dark:text-zinc-800  text-zinc-200 p-2"
        onChange={handleChange}
      ></textarea>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export { Form };
