import ReCAPTCHA from "react-google-recaptcha";

interface ReCaptchaProps {
  onVerify: (token: string | null) => void;
}

const ReCaptcha: React.FC<ReCaptchaProps> = ({ onVerify }) => {
  const sitekey = "6LcJtjEqAAAAAMGQKQSQxCAnPNmHnkOTqAy9nLOf";

  const handleChange = (token: string | null) => {
    onVerify(token);
  };

  return (
    <div className="flex justify-center my-4">
      <ReCAPTCHA
        sitekey={sitekey}
        onChange={handleChange}
        theme="dark"
      />
    </div>
  );
};

export default ReCaptcha; 