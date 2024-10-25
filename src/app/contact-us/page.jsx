import dynamic from 'next/dynamic';
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));

const ContactUs = () => {
  return <ContactSection/>;
};
export default ContactUs;
