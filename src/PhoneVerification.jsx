import React, { useState, useEffect } from "react";  
import women from "./assets/women.png";  

const PhoneVerification = () => {  
  const [code, setCode] = useState("");  
  const [resendTimer, setResendTimer] = useState(30);  
  const [canResend, setCanResend] = useState(false);  

    
  useEffect(() => {  
    if (resendTimer > 0) {  
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);  
      return () => clearTimeout(timer);  
    } else {  
      setCanResend(true);  
    }  
  }, [resendTimer]);  

  const handleChange = (e) => setCode(e.target.value);  

  const handleResend = () => {  
    if (canResend) {  
      setResendTimer(30);  
      setCanResend(false);  
      console.log("Resend verification code...");  
    }  
  };  

  const handleVerify = () => console.log("Verifying code:", code);  

  return (  
    <div className="flex flex-col items-center justify-start min-h-screen bg-white-100 p-6">  
      <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-2">Phone Verification</h2>  
      <p className="text-sm text-gray-600 mb-4 text-center">  
        We’ve sent a verification to <strong>(+91) 12345 67890</strong> to verify your email address and activate your account.  
      </p>  

      <img src={women} alt="Phone Verification" className="w-24 mx-auto my-5" />  

      <div className="relative mb-4 w-full max-w-xs">  
        <input  
          type="text"  
          placeholder="Enter Verification Code..."  
          value={code}  
          onChange={handleChange}  
          className="w-full p-3 border border-gray-300 rounded-md pr-24"  
        />  

        <button  
          onClick={handleResend}  
          disabled={!canResend}  
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-sm ${  
            canResend ? 'text-blue-600' : 'text-gray-400'  
          } cursor-pointer`}  
        >  
          Resend {resendTimer > 0 ? `(${resendTimer}s)` : ''}  
        </button>  
      </div>  

      <p className="text-sm text-gray-500 mb-4">  
        Didn’t receive any code?{" "}  
        <span onClick={handleResend} className="text-[#181b56] font-bold cursor-pointer">Resend Code</span>  
      </p>  
      
      <button  
        className="mt-20 bg-[#181b56] text-white font-bold py-2 px-4 rounded-md w-full max-w-xs"  
        onClick={handleVerify}  
      >  
        Verify My Phone  
      </button>  
    </div>  
  );  
};  

export default PhoneVerification;