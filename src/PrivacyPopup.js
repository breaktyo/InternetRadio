import React, { useState } from 'react';
import './PrivacyPopup.css';

const PrivacyPopup = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="privacy-popup">
      <p>
        Korzystamy z plików cookie oraz przetwarzamy dane geolokalizacyjne w celu
        poprawy jakości usług. Kontynuując korzystanie z witryny, wyrażasz na to zgodę.
      </p>
      <button onClick={() => setVisible(false)}>Akceptuję</button>
    </div>
  );
};

export default PrivacyPopup;
