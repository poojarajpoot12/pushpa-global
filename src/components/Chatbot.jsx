import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import '../css/Chatbot.css';
import logo from "../assets/chatbot-logo.png"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "", phone: "", email: "", country: "", qualification: "", city: "", budget: ""
  });
  
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hi 👋 Looking to study abroad?' },
  ]);

  const scrollRef = useRef(null);

  const allowedCountries = ["Australia", "Canada", "France", "Germany", "Ireland", "Japan", "Moldova", "New-Zealand", "Netherlands", "Singapore", "UK", "USA","UAE"];
  const allowedQualifications = ["10th", "12th", "Graduate", "Post Graduate"];

  // ==========================================
  // BACKEND API INTEGRATION
  // ==========================================
  const sendDataToBackend = async (finalChatbotData) => {
    const payload = {
      role: "student", 
      fullName: finalChatbotData.name,
      email: finalChatbotData.email,
      phoneNumber: finalChatbotData.phone,
      city: finalChatbotData.city,
      state: "", 
      password: "ChatbotDefaultPassword123", 
      message: `[SOURCE: WEBSITE CHATBOT] - Budget: ${finalChatbotData.budget} Lacs. Preferred Country: ${finalChatbotData.country}. Qualification: ${finalChatbotData.qualification}.`,
      
      dynamicProfile: {
        studentFields: {
          currentQualification: finalChatbotData.qualification || "",
          interestedCourse: "", 
          preferredCountry: finalChatbotData.country || "",
          budgetRange: finalChatbotData.budget ? `${finalChatbotData.budget} Lacs` : "",
          studyTimeline: ""
        }
      }
    };

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      const resData = await response.json();

      if (response.ok || response.status === 201) {
        console.log("Chatbot data saved successfully!", resData);
      } else {
        console.error("Backend Error:", resData);
      }
    } catch (error) {
      console.error("Network Error:", error);
    }
  };
  // ==========================================

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const resetChat = () => {
    setStep(0);
    setMessages([{ id: 1, type: 'bot', text: 'Hi 👋 Looking to study abroad?' }]);
    setLeadData({ name: "", phone: "", email: "", country: "", qualification: "", city: "", budget: "" });
    setUserInput('');
  };

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    setIsOpen(false);
    setTimeout(resetChat, 500); 
  };

  const addBotMessage = (text) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + Math.random(), type: 'bot', text }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const input = userInput.trim();
    if (!input || isTyping) return;

    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: input }]);
    setUserInput('');
    
    if (step === 0) {
      addBotMessage('Great! What is your full name?');
      setStep(1);
    } 
    else if (step === 1) {
      if (input.length < 3 || /\d/.test(input)) {
        addBotMessage('Please enter a valid name (letters only).');
      } else {
        setLeadData(prev => ({ ...prev, name: input }));
        addBotMessage(`Nice to meet you, ${input}! What is your 10-digit WhatsApp number?`);
        setStep(2);
      }
    } 
    else if (step === 2) {
      if (!/^[6-9]\d{9}$/.test(input)) {
        addBotMessage('Please enter a valid 10-digit mobile number.');
      } else {
        setLeadData(prev => ({ ...prev, phone: input }));
        addBotMessage('Thank you. Please share your Email ID.');
        setStep(3);
      }
    }
    else if (step === 3) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
        addBotMessage('Please enter a valid email address.');
      } else {
        setLeadData(prev => ({ ...prev, email: input }));
        addBotMessage('Which country are you planning to study in?');
        setStep(4);
      }
    }
    else if (step === 4) {
      const selected = allowedCountries.find(c => c.toLowerCase() === input.toLowerCase());
      if (!selected) {
        addBotMessage('Sorry, we have no partnership with this country. Please select from the list.');
      } else {
        setLeadData(prev => ({ ...prev, country: selected }));
        addBotMessage('What is your highest qualification?');
        setStep(5);
      }
    }
    else if (step === 5) {
      const selected = allowedQualifications.find(q => q.toLowerCase() === input.toLowerCase());
      if (!selected) {
        addBotMessage('Please select: 10th, 12th, Graduate, or Post Graduate.');
      } else {
        setLeadData(prev => ({ ...prev, qualification: selected }));
        addBotMessage('In which city of India do you live?');
        setStep(6);
      }
    }
    else if (step === 6) {
      setIsTyping(true);
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${input}&countrycodes=in`);
        const data = await response.json();
        if (data.length === 0) {
          addBotMessage("We couldn't locate this place. Please enter a famous city nearby.");
          setIsTyping(false);
        } else {
          setLeadData(prev => ({ ...prev, city: input }));
          addBotMessage('Last question, what is your estimated budget (in Lacs)?');
          setStep(7);
          setIsTyping(false);
        }
      } catch (error) {
        setLeadData(prev => ({ ...prev, city: input }));
        setStep(7);
      }
    }
    else if (step === 7) {
      const finalData = { ...leadData, budget: input };
      setLeadData(finalData);
      
      // API Trigger with mapped data structure
      sendDataToBackend(finalData); 

      addBotMessage('Perfect! 🎓 Our senior counsellor will contact you shortly. Thanks!');
      setTimeout(handleClose, 5000);
    }
  };

  return (
    <div className="global-chat-wrapper">
      <div className="chat-icon pulse-animation" onClick={() => setIsOpen(true)}>
        <MessageCircle size={30} color="white" />
        <span className="notification-dot"></span>
      </div>

      {isOpen && (
        <div className="chat-window shadow-effect">
          <div className="chat-header">
            <div className="bot-profile">
              <div className="chatbot-logo-container">
                <img src={logo} alt="Pushpa Global Logo" className="chatbot-header-logo" />
              </div>
              <div className="bot-status">
                <span className="name">Connect Now</span>
                <span className="status-text">Online</span>
              </div>
            </div>
            <button className="close-btn" onClick={handleClose}>
              <X size={20} />
            </button>
          </div>

          <div className="chat-messages" ref={scrollRef}>
            {messages.map((m) => (
              <div key={m.id} className={`msg-bubble ${m.type}`}>{m.text}</div>
            ))}
            
            {isTyping && (
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            )}

            {step === 4 && !isTyping && (
              <div className="chip-container">
                {allowedCountries.map(c => (
                  <button key={c} onClick={() => { setUserInput(c); }} className="chip-btn">{c}</button>
                ))}
              </div>
            )}
            
            {step === 5 && !isTyping && (
              <div className="chip-container">
                {allowedQualifications.map(q => (
                  <button key={q} onClick={() => { setUserInput(q); }} className="chip-btn">{q}</button>
                ))}
              </div>
            )}
          </div>

          <form className="chat-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Type your answer..." 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
            />
            <button type="submit" className="send-btn"><Send size={18} /></button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;