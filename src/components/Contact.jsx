import { CONTACT } from "../constants";

export const Contact = () => {
  const { address, phoneNo, email } = CONTACT;

  return (
    <div className="border-t border-neutral-900 pt-4">
      <h1 className="my-8 text-center text-4xl">Contact</h1>
      <div className="flex flex-col items-center">
        <p className="mb-4 text-neutral-400">
          <strong>Address:</strong> {address}
        </p>
        <p className="mb-4 text-neutral-400">
          <strong>Phone:</strong> {phoneNo}
        </p>
        <p className="mb-4 text-neutral-400">
          <strong>Email:</strong> <a href={`mailto:${email}`} className="text-purple-500 underline">{email}</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
