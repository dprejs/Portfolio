import { useContext, useState } from "react";
import EastSharpIcon from '@mui/icons-material/EastSharp';
import { ScreenContext } from "../context";


interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const screen = useContext(ScreenContext)
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      alert('Message sent successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col ${screen.isMobile ? "w-full" : "mt-10"}`}>
      <div className={`${screen.isMobile ? "flex-col gap-5" : "justify-between gap-64"} flex`}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-64 bg-primary border-b-2 border-white mb-1"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-80 bg-primary border-b-2 border-white mb-1"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
        </div>
      </div>

      <div className="flex flex-col mt-5 gap-1">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="h-32 bg-primary border-b-2 border-white mb-1"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        />
        {errors.message && <small style={{ color: 'red' }}>{errors.message}</small>}
      </div>

      <button type="submit" className="mt-5 text-3xl font-bold flex  gap-10 items-center border-2 border-white w-48 p-2 justify-center self-center">
        Send
        <EastSharpIcon sx={{width: 50, height: "50px"}}/>
    {/* <ArrowSvg fill="#ffffff"  stroke="#ffffff" width={70} height={70}/> */}
        </button>
    </form>
  );
};

export default ContactForm;
